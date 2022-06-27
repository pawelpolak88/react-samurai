import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
    posts: [
        { id: 1, message: "Hello", likeCounts: "12", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 2, message: "How Are you?", likeCounts: "124", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 3, message: "Nice to meet you", likeCounts: "2", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 4, message: "Nice day", likeCounts: "12", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 5, message: "Buy, buy", likeCounts: "23", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date(),
                message: state.newPostText,
                likeCounts: "12",
                userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1"
            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state
    }

}



export const addPost = () => {
    return {
        type: ADD_POST,
    }
};

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUsersThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export default profileReducer;