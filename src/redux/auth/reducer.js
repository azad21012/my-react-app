import {combineReducers} from "redux";
import * as types from  '../../constants/actionTypes.js';

import  {authReducer } from "./login/reducer";



export default combineReducers({
    [types.AUTH]: authReducer,
});