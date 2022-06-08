const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        { id: 1, message: "Hello", likeCounts: "12", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 2, message: "How Are you?", likeCounts: "124", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 3, message: "Nice to meet you", likeCounts: "2", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 4, message: "Nice day", likeCounts: "12", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 5, message: "Buy, buy", likeCounts: "23", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = { ...state };

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date(),
                message: state.newPostText,
                likeCounts: "12",
                userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj"
            };

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.newPostText = action.newText;
            return stateCopy;
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

export default profileReducer;