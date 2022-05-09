const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hello", likeCounts: "12", userAvatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHq8Co9xraJJw/profile-displayphoto-shrink_100_100/0/1577966421153?e=1657152000&v=beta&t=ZeMNKLYqjwQfjVfdAZnLvXm4wNAu0pYyEbnjACB6kas" },
                { id: 2, message: "How Are you?", likeCounts: "124", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLQwZe_0hlpF-V6iCFIeAzpiGJNiLNDQwuNRO3NcJQ=s48-c-k-c0x00ffffff-no-rj" },
                { id: 3, message: "Nice to meet you", likeCounts: "2", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLSMxL-2FqrIlhoKPVnZjfWCsVdYnQRSXHFB1L4kpA=s48-c-k-c0x00ffffff-no-rj" },
                { id: 4, message: "Nice day", likeCounts: "12", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLSGB-S8uvSoH0lr6qxqup-EMxLAI1GeQkEXy8qy2A=s48-c-k-c0x00ffffff-no-rj" },
                { id: 5, message: "Buy, buy", likeCounts: "23", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLT4pXmfEidDciy6fz_Ur4NrvEmm6aT4h-0J0noKTA=s48-c-k-c0x00ffffff-no-rj" },
            ],
            newPostText: ""
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dimych", userAvatar: "https://media-exp1.licdn.com/dms/image/C5103AQGnu0Z4fIBK3w/profile-displayphoto-shrink_100_100/0/1565699734445?e=1657152000&v=beta&t=bLv9zBo7sJ3hzhO2XZMMaRxAiMNt1J4JCfBCkgNzA8c" },
                { id: 2, name: "Andrew", userAvatar: "https://media-exp1.licdn.com/dms/image/C4E03AQEgB0nt8Bq1sQ/profile-displayphoto-shrink_100_100/0/1517500457136?e=1657152000&v=beta&t=hHjyv8l1Fd8N1jt1I-Z0BG0Pdy5-LVPw0MGCBXXzXkU" },
                { id: 3, name: "Sveta", userAvatar: "https://media-exp1.licdn.com/dms/image/C4E03AQG9EYOZ13YDkQ/profile-displayphoto-shrink_100_100/0/1591336648596?e=1657152000&v=beta&t=lbX_7xgVPjpAozhvR4WgSXYSsWwlt-zOOGHKz-d-rI8" },
                { id: 4, name: "Sasha", userAvatar: "https://media-exp1.licdn.com/dms/image/C5603AQHRF-p5HIY_OQ/profile-displayphoto-shrink_100_100/0/1618232608724?e=1657152000&v=beta&t=p1xqus3wxo_uJGnCD5lDFgt7raUxZSjag-Fwr3YECF8" },
                { id: 5, name: "Victor", userAvatar: "https://media-exp1.licdn.com/dms/image/C5603AQG_7Zy8Pk1Cxg/profile-displayphoto-shrink_100_100/0/1539754738583?e=1657152000&v=beta&t=xGY2Gy3zrUyHJQUQO5aCGMLsscfC_s27JhCNU_d7_I4" },
                { id: 6, name: "Valeta", userAvatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHq8Co9xraJJw/profile-displayphoto-shrink_100_100/0/1577966421153?e=1657152000&v=beta&t=ZeMNKLYqjwQfjVfdAZnLvXm4wNAu0pYyEbnjACB6kas" },
            ],

            messages: [
                { id: 1, message: "Hello", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
                { id: 2, message: "How Are you?", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
                { id: 3, message: "Nice to meet you", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
                { id: 4, message: "Nice day", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
                { id: 5, message: "Buy, buy", checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png" },
            ],

            newMessageText: ''
        },

        friendsPage: {
            users: [
                { id: 1, name: "Michel", userAvatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHq8Co9xraJJw/profile-displayphoto-shrink_100_100/0/1577966421153?e=1657152000&v=beta&t=ZeMNKLYqjwQfjVfdAZnLvXm4wNAu0pYyEbnjACB6kas" },
                { id: 2, name: "Anastaya", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLQUxqfjQVfWtuF1oJp4WPCfJe1uiFM-EyCiVOGn-Q=s48-c-k-c0x00ffffff-no-rj" },
                { id: 3, name: "David", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLSMxL-2FqrIlhoKPVnZjfWCsVdYnQRSXHFB1L4kpA=s48-c-k-c0x00ffffff-no-rj" },
                { id: 4, name: "Oleg", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLSGB-S8uvSoH0lr6qxqup-EMxLAI1GeQkEXy8qy2A=s48-c-k-c0x00ffffff-no-rj" },
                { id: 5, name: "Egor", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLT4pXmfEidDciy6fz_Ur4NrvEmm6aT4h-0J0noKTA=s48-c-k-c0x00ffffff-no-rj" },
            ],
        },

    },

    _callSubscriber() {
        return
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: new Date(),
                message: this._state.profilePage.newPostText,
                likeCounts: "12",
                userAvatar: "https://yt3.ggpht.com/ytc/AKedOLSGB-S8uvSoH0lr6qxqup-EMxLAI1GeQkEXy8qy2A=s48-c-k-c0x00ffffff-no-rj"
            };

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";

            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: new Date(),
                message: this._state.dialogsPage.newMessageText,
                checkbox: "https://w7.pngwing.com/pngs/366/987/png-transparent-computer-icons-check-mark-yes-miscellaneous-angle-rectangle.png"
            }

            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = "";

            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    },
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreater = () => {
    return {
        type: ADD_POST,
    }
};

export const updateNewPostTextActionCreater = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }

};

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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


export default store;