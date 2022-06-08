import React from "react";
import MyPosts from "./MyPosts";
import { addPost, updateNewPostText } from "../../../redux/profileReducer"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreater());
//         },

//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreater(text));
//         }
//     }
// }


const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts)

export default MyPostsContainer;