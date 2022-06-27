import { headersAPI } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { id, email, login }
    }
}

export const loginThunkCreator = () => {
    return (dispatch) => {
        headersAPI.login()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}


export default authReducer;