const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        { id: 1, name: "Dimych", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 2, name: "Andrew", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 3, name: "Sveta", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 4, name: "Sasha", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 5, name: "Victor", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
        { id: 6, name: "Valeta", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
    ],

    messages: [
        { id: 1, message: "Hello", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
        { id: 2, message: "How Are you?", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
        { id: 3, message: "Nice to meet you", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
        { id: 4, message: "Nice day", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
        { id: 5, message: "Buy, buy", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: new Date(),
                message: state.newMessageText,
                checkbox: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj"
            }

            state.messages.push(newMessage)
            state.newMessageText = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const updateNewMessageTextActionCreator = (textMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: textMessage,
    }
};


export default dialogsReducer;