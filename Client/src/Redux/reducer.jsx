import { FETCH_USER_DATA, ADD_USER_DATA, FETCH_HOME_PAGE_DATA, LOCAL_USER, LOCAL_USER_LOGOUT, ADD_BUSINESS, REMOVE_BUSINESS, REMOVE_BUSINESS_FROM_HOME_PAGE, NORMAL_USER } from "./action"


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
                UserData:[...state.UserData, action.payload],
                HomePageData:[...state.HomePageData, action.payload.business[0]]
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
        case ADD_BUSINESS:
            return {
                ...state,
                LocalUser:action.toto,
                HomePageData:[...state.HomePageData, action.obj]
            }
        case REMOVE_BUSINESS:
            return {
                ...state,
                LocalUser:action.payload
            }
        case REMOVE_BUSINESS_FROM_HOME_PAGE:
            return {
                ...state,
                HomePageData:[...action.payload]
            }
        case NORMAL_USER:
            return {
                ...state,
                UserData:[...state.UserData, action.payload]
            }
        default:
            return state
    }
}


