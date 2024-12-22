import { FETCH_USER_DATA, ADD_USER_DATA, FETCH_HOME_PAGE_DATA, LOCAL_USER, LOCAL_USER_LOGOUT } from "./action"


const initState={
    HomePageData:[],
    UserData:[],
    LocalUser:null  
}

export const Reducer=(state = initState , action)=>{
    switch(action.type){
        case FETCH_USER_DATA:
            return {
                ...state, 
                UserData:[...state.UserData, ...action.payload]
        }
        case ADD_USER_DATA:
            return {
                ...state,
                UserData:[...state.UserData, action.payload]
            }
        case FETCH_HOME_PAGE_DATA:
            return {
                ...state,
                HomePageData:[...state.HomePageData, ...action.payload]
            }
        case LOCAL_USER:
            return {
                ...state,
                LocalUser:action.payload
            }
        case LOCAL_USER_LOGOUT:
            return {
                ...state,
                LocalUser:null
            }
        default:
            return state
    }
}

