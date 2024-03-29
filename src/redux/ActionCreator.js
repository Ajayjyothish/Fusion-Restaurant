import * as ActionTypes from "./ActionType"
import { baseURL } from "../shared/baseURL";

export const addComment = (comment) => {

    return({
        type : ActionTypes.ADD_COMMENT,
        payload : comment
    })
}

export const postComment = (dishId,rating,author,comment) => (dispatch) =>{
    const newComment = {
        dishId : dishId,
        rating : rating,
        author : author ,
        comment : comment 
    }
    newComment.date = new Date().toISOString()

    return fetch(baseURL + 'comments', {
        method : "POST",
        body: JSON.stringify(newComment),
        headers : {
            'Content-Type' : 'application/json'
        },
        credentials : 'same-origin'
    })
    .then(response => {
        if (response.ok){
            return response
        }else{
            var error = new Error("Error" + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {var errmess = new Error(error.message);
        throw errmess
    })
    .then(respone => respone.json())
    .then(response=> dispatch(addComment(response)))
    .catch(error => {console.log("Post failed ", error.message)
        alert("Your comment could'nt get posted\n" + error.message)})
}

export const fetchDishes = ()=> (dispatch) => {
    dispatch(dishesLoading(true))

    return fetch(baseURL + "dishes")
    .then(response => {
        if (response.ok){
            return response
        }else{
            var error = new Error("Error" + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {var errmess = new Error(error.message);
        throw errmess
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type : ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
})

export const  addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
})

// ....................   COMMENTS  .....................

export const fetchComments = ()=> (dispatch) => {
    

    return fetch(baseURL + "comments").then(response => {
        if (response.ok){
            return response
        }else{
            var error = new Error("Error" + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {var errmess = new Error(error.message)
        throw errmess
    }).then(response => response.json())
    
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
})

export const  addComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
})


// ................ PROMOTIONS ....................

export const fetchPromos = ()=> (dispatch) => {
    dispatch(promosLoading(true))

    return fetch(baseURL + "promotions").then(response => {
        if (response.ok){
            return response
        }else{
            var error = new Error("Error" + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {var errmess = new Error(error.message)
        throw errmess
    }).then(response => response.json())
    
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type : ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errmess) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload : errmess
})

export const  addPromos = (promotions) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promotions
})

// ...................... LEADERS ...........................


export const fetchLeaders = ()=> (dispatch) => {
    dispatch(leadersLoading(true))

    return fetch(baseURL + "leaders").then(response => {
        if (response.ok){
            return response
        }else{
            var error = new Error("Error" + response.status + ': ' + response.statusText)
            error.response = response
            throw error
        }
    },
    error => {var errmess = new Error(error.message)
        throw errmess
    }).then(response => response.json())
    
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
    type : ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload : errmess
})

export const  addLeaders = (leaders) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
})