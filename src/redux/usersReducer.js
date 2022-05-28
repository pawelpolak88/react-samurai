const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }

                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }

}


export const followActionCreater = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowActionCreater = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}


export default usersReducer; 