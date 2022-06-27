import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../../redux/dialogsReducer"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator());
//         },
//         onMessageChange: (textMessage) => {
//             dispatch(updateNewMessageTextActionCreator(textMessage));
//         }
//     }
// }


const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;