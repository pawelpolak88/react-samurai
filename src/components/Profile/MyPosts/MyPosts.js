import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/state"

const MyPosts = (props) => {
    // console.log(props);
    const postElements = props.state.posts
        .map((p, key) =>
            <Post
                key={key}
                message={p.message}
                likeCounts={p.likeCounts}
                userAvatar={p.userAvatar}
            />
        )


    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreater(text))
    }


    return (
        <div className={classes.MyPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.state.newPostText}
                    />

                </div>
                <div>
                    <button
                        onClick={addPost}
                    >
                        Add post
                    </button>
                </div>

            </div>
            <div>New post</div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;