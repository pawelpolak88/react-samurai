import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={classes.Message}>
            <div className={classes.checkbox_wrapp}>
                <img className={classes.checkbox} src={props.checkbox} alt="checkbox" />
            </div>
            <div className={classes.messageItem}>{props.message}</div>
        </div>
    )
}

export default Message;