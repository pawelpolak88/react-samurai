import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hello", likeCounts: "12", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 2, message: "How Are you?", likeCounts: "124", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 3, message: "Nice to meet you", likeCounts: "2", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 4, message: "Nice day", likeCounts: "12", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 5, message: "Buy, buy", likeCounts: "23", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
            ],
            newPostText: ""
        },

        dialogsPage: {
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
        },

        friendsPage: {
            users: [
                { id: 1, name: "Michel", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 2, name: "Anastaya", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 3, name: "David", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 4, name: "Oleg", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
                { id: 5, name: "Egor", userAvatar: "https://yt3.ggpht.com/ytc/AKedOLS1AZhEVoT69mDznUiqA5tTkS4D47iqYSE7eYpNCg=s48-c-k-c0x00ffffff-no-rj" },
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    },
};

export default store;