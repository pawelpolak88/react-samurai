import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        usersPage: usersReducer,
        auth: authReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store