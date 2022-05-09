import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.column}>
                <img className={classes.avatar} src={props.userAvatar} alt="avatar" />
                <span className={classes.message}>{props.message}</span>
            </div>
            <div className={classes.column}>
                <span className={classes.like}>like: </span>{props.likeCounts}
            </div>
        </div>
    )
}

export default Post;