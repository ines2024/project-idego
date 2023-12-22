import { ALLPRODUCT, ALLUSER, ALLUSERS, GETCURRENT, LOGIN, LOGOUT, ONEPRODUCT, POSTPRODUCT } from "./ActionType"

const initialState = {
    products: [],
    product:{},
    users:[],
    basket: [],
    user:{}
}

export const products_reducer = (state = initialState, { type, payload }) => {
    switch (type) {


        case ALLPRODUCT:
            return { ...state, products: payload }
        case ONEPRODUCT:
            return { ...state, product: payload }    
       
        case "ADDTOBASKET":
          const exist=state.basket.find(e=>e.pro._id===payload.pro._id)
          console.log(exist)
          if(!exist){
            return {...state,basket:[...state.basket,payload]}
          }
        case "REMOVEFROMBASKET":
        return{...state, basket:state.basket.filter(e=>e.pro._id !== payload)}
        case ALLUSER:
            return { ...state, user: payload } 
        default:
            return state
    }
}
export const users_reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            localStorage.setItem("token",payload.token)
            return { ...state,user:payload.user }
        case GETCURRENT:
            return {...state,user:payload}    
        case ALLUSERS:
            return { ...state, users: payload }
        case LOGOUT:
            return{...state, users: {}} 
        default:
            return state
    }
}



