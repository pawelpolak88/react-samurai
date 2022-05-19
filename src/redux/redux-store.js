import { combineReducers, createStore } from "redux"
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
    }
);

let store = createStore(reducers);

export default store