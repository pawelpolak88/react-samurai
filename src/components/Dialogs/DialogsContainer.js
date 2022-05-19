import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer"
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const onMessageChange = (textMessage) => {
                    store.dispatch(updateNewMessageTextActionCreator(textMessage))
                }
                return <Dialogs
                    onMessageChange={onMessageChange}
                    addMessage={addMessage}
                    dialogsPage={store.getState().dialogsPage} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;