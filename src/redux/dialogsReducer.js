const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        { id: 1, name: "Dimych", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 2, name: "Andrew", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 3, name: "Sveta", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 4, name: "Sasha", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 5, name: "Victor", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
        { id: 6, name: "Valeta", userAvatar: "https://sun1.userapi.com/sun1-99/s/v1/ig2/JWSYDS19oLKa56WSkS-i_Z2chbrfrQ4h_Hk5J8nbuJlU9NWtGwq2PzdDe6aIwltP16dfUuh9j50zftXdVm50k-KR.jpg?size=50x50&quality=96&crop=321,1,1915,1915&ava=1" },
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

    let stateCopy = {
        ...state,
        // messages: [...state.messages]
    }

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: new Date(),
                message: state.newMessageText,
                checkbox: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj"
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
        default:
            return state
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const updateNewMessage = (textMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: textMessage,
    }
};


export default dialogsReducer;