import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../../redux/dialogsReducer"
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage, updateNewMessage }),
    WithAuthRedirect,
)(Dialogs)

