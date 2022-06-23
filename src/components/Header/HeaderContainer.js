import React from "react";
import { connect } from "react-redux"
import Header from "./Header";
import { headersAPI } from "../../api/api"
import { setAuthUserData } from "../../redux/authReducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        headersAPI.login()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)