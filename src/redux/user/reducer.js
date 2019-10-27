export default function(state={data:null},action){
    switch(action.type){
        case 'USER_FETCH_REQUESTED':
            return {...state,data:action.payload};
        default:
            return state;
    }
}
