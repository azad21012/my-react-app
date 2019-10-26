import { fail, success,reset } from "./utility";

// define initState to mutate this object in each case
const initState = { isLoading: false, data: undefined, hasError: false, errorMessage:'', message: '' };


export function generateFormalReducer(
  actionType
){
    return (state = initState, action) => {
        switch (action.type) {
            case success(actionType):
                return {
                ...initState,
                data: action.response,
                };
            case actionType:
                return { ...initState, isLoading: true };
            case fail(actionType):
                return {
                ...initState,
                hasError: true,
                errorMessage: action.errorResponse
                };
            case reset(actionType):
                return initState;
            default:
                return state ;
        }
        
    };
}

export function generateFormalSelector(passSt) {
  return {
    isLoading: (state) => {
    //   console.log(state);
      return passSt(state).isLoading;
    }
    ,
    hasData: (state) => passSt(state).data !== undefined,
    getData: (state) => {
        return passSt(state).data ? passSt(state).data :null;
    },
    getMessage: (state) => passSt(state).data,
    hasError: (state) => passSt(state).hasError,
    getError: (state) =>
        passSt(state).errorMessage && passSt(state).errorMessage.message ? passSt(state).errorMessage.message :
        passSt(state).errorMessage.meta ? passSt(state).errorMessage.meta.errors :
        null
  };
}
