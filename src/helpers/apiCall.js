import {
    fail,
    getToken,
    clearToken
} from "./utility";
import axios from "axios";
import { history } from "../store/configureStore";

  const ApiCall = action => {
    if (typeof action !== "object") {
      throw new Error("action should be object");
    }

    if (!action.request) {
      throw new Error("action should have request");
    }
    return async (dispatch) => {
      dispatch(action);

      try {
        /**
         * response is on success
         */
        let response = await axios({
          ...action.request,
          headers: { Authorization: `Bearer ${getToken()}`},
          timeout:20000
        });

        response = response.data;
        if (action.onSuccess) {
          return action.onSuccess({ dispatch }, response);
        }
      } catch (error) {
        if(error.response===undefined){
        /**
         * when there is no response from server
        */
          return dispatch({
            type: fail(action.type),
            errorCode: 300,
            errorResponse: {message:"پاسخی از سمت سرور دریافت نشد"},
            meta: { ...action }
          });
        }else if(error.response.status===401 && getToken()){
          /**
           * when user has token but not authorized
           *  for example : when  user-token expired
           */
          clearToken();
          history.push("/login");
        }else if(error.response.status===404 ){
          /**
           * not found error
           */
          history.push("/404");
        }else {
          /**
           * other type of errors hendles by this piece of code
           */
          return dispatch({
            type: fail(action.type),
            errorCode: error.response.status,
            errorResponse: error.response.data,
            meta: { ...action }
          });
        } 
      }
    };
  };

  export default ApiCall;
