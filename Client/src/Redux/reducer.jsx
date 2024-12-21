import { FETCH_USER_DATA, ADD_USER_DATA, FETCH_HOME_PAGE_DATA } from "./action"


const initState={
    HomePageData:[],
    UserData:[],    
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
        default:
            return state
    }
}
