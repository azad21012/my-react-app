import axios from "axios";
import { getToken } from "./utility";

export const api = {
    fetchUser:async(action)=>await axios({
        ...action.request,
        headers: { Authorization: `Bearer ${getToken()}`},
        timeout:20000
    })
}
