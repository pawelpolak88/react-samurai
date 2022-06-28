import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../../redux/dialogsReducer"
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"


const RedirectComponent = WithAuthRedirect(Dialogs)

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

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default connect(mapStateToProps, { addMessage, updateNewMessage })(RedirectComponent);