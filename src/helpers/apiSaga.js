import {
    getToken,
} from "./utility";
import axios from "axios";
export default  function(request){
    return axios({
        ...request,
        headers: { Authorization: `Bearer ${getToken()}`},
        timeout:20000
    });
}