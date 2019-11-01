
export  function fetchUser(){
    return {
        type:"USER_FETCH_REQUESTED",
        payload : {
            id:1,
            name:"azad"
        }
    };
}

// thunk example
// export  function fetchUser(){
//     return dispatch=>
//         setTimeout(()=> dispatch({
//                 type:"USER_FETCH_REQUESTED",
//                 payload : {
//                     id:1,
//                     name:"azad"
//                 }
//             })
//         ,1000)
    
// }

