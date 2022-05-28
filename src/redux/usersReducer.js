const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: "https://yt3.ggpht.com/a93VYC0Cf-wy9lSZeKhmPCbkILrH-Hha_K9SkUAsM84MpviLQC__ckYfKMGLDqYvlWGnyrLe3g=s48-c-k-c0x00ffffff-no-rj",
            fullName: "Dmitry",
            status: "text hello",
            followed: true,
            location: {
                country: "Belarus",
                city: "Brest"
            }
        },
        {
            id: 2,
            photoUrl: "https://yt3.ggpht.com/a93VYC0Cf-wy9lSZeKhmPCbkILrH-Hha_K9SkUAsM84MpviLQC__ckYfKMGLDqYvlWGnyrLe3g=s48-c-k-c0x00ffffff-no-rj",
            fullName: "Ivan",
            status: "text hello",
            followed: false,
            location: {
                country: "Poland",
                city: "Warszaw"
            }
        },
        {
            id: 3,
            photoUrl: "https://yt3.ggpht.com/a93VYC0Cf-wy9lSZeKhmPCbkILrH-Hha_K9SkUAsM84MpviLQC__ckYfKMGLDqYvlWGnyrLe3g=s48-c-k-c0x00ffffff-no-rj",
            fullName: "Gena",
            status: "text hello",
            followed: true,
            location: {
                country: "Russian",
                city: "Moscow"
            }
        }
    ]
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