import axios from 'axios'
export const FETCH_HOME_PAGE_DATA = "FETCH_HOME_PAGE_DATA"
export const FETCH_USER_DATA = "FETCH_USER_DATA"
export const ADD_USER_DATA = "ADD_USER_DATA"
export const LOCAL_USER="LOCAL_USER"
export const LOCAL_USER_LOGOUT = "LOCAL_USER_LOGOUT"
export const ADD_BUSINESS="ADD_BUSINESS"
export const REMOVE_BUSINESS = "REMOVE_BUSINESS"



export const Fetch_Home_Page_Data=()=>{
    return async (dispatch)=>{
        try{
            let res = await axios.get(`https://shre-5279e-default-rtdb.firebaseio.com/cards.json`)
            let payload = Object.values(res.data)
            dispatch({type:FETCH_HOME_PAGE_DATA, payload})
        }catch{
            console.log("FETCH_HOME_PAGE_DATA Error........................................")
        }
    }
}

export const Fetch_User_Data=()=>{
        return async(dispatch)=>{
            try{
                let res = await axios.get("https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json")
                let payload = Object.values(res.data)
                dispatch({type:FETCH_USER_DATA, payload})
            }catch{
                console.log("FETCH_USER_DATA Error........................................")
            }
        }
}

export const Add_User_Data =(payload)=>{
    return {
        type:ADD_USER_DATA,
        payload
    }
}

export const Local_User=(payload)=>{
    return {
        type:LOCAL_USER,
        payload
    }
}

export const Local_User_Logout=()=>{
    return {
        type:LOCAL_USER_LOGOUT,
        payload:null
    }

}

export const Add_Business=(payload, localUser)=>{
    return async(dispatch)=>{
        let newdata = {...localUser, business:[...localUser.business, payload] }
       try{
        let res = await axios.put(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${localUser.userId}.json`, newdata)
        dispatch({
            type:ADD_BUSINESS,
            payload
        })
       }
       catch{

       }
    }
}


export const Remove_Business =(payload)=>{
    return async (dispatch)=>{
        try{
            await axios.put(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users/${payload.userId}.json`, payload)
            .then((re)=>{
                dispatch({type:REMOVE_BUSINESS, payload})
            })
        }
        catch{
            console.log("Remove_Business error.....................................")
        }
    }
}



