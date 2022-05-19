import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profileReducer"
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage

                const addPost = () => {
                    store.dispatch(addPostActionCreater());
                }

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreater(text);
                    store.dispatch(action);
                };

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.posts}
                    newPostText={state.newPostText}
                />
            }}

        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;