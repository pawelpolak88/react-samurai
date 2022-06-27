import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom"

const Dialogs = (props) => {

    // console.log(props);

    const dialogsElements = props.dialogsPage.dialogs
        .map((d, key) =>
            <Dialog key={key} name={d.name} userAvatar={d.userAvatar}
                id={d.id} />)

    const messagesElement = props.dialogsPage.messages
        .map((m, key) =>
            <Message key={key} checkbox={m.checkbox} message={m.message} />)

    const newMessageElement = React.createRef()

    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.updateNewMessage(textMessage);
    }

    if (!props.isAuth) return <Navigate to='/login' />

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <textarea
                    ref={newMessageElement}
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange}
                />
                <div>
                    <button
                        onClick={addMessage}
                        className={classes.addMessage}>
                        add message
                    </button>
                </div>

                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;