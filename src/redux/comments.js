import * as ActionType from "./ActionType"



export const Comments = (state={
    errMess : null,
    comments :[]
},action) => {
    switch(action.type){
        case ActionType.ADD_COMMENTS:
            return {...state, isLoading:false,errMess:null,comments:action.payload}

        case ActionType.DISHES_FAILED:
            return { ...state, isLoading:false, errMess:action.payload, comments:[]}
        

        case ActionType.ADD_COMMENT :
            var comment = action.payload
            return {...state, comments: state.comments.concat(comment)}
        default :
            return state
    }
}