import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state"


const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs
        .map((d, key) =>
            <Dialog key={key} name={d.name} userAvatar={d.userAvatar}
                id={d.id} />)

    const messagesElement = props.state.messages
        .map((m, key) =>
            <Message key={key} checkbox={m.checkbox} message={m.message} />)

    const newMessageElement = React.createRef()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(textMessage))
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <textarea
                    ref={newMessageElement}
                    value={props.state.newMessageText}
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