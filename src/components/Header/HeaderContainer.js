import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
import { setAuthUserData } from "../../redux/authReducer"
import { loginThunkCreator } from "../../redux/authReducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loginThunkCreator()
    }

    render() {
        return (
            <Header {...this.props} />
        );

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData, loginThunkCreator })(HeaderContainer)