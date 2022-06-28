import React from "react";
import { connect } from "react-redux"
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer"
import { useParams } from 'react-router-dom'
import { getUsersThunkCreator } from "../../redux/profileReducer"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 2

        this.props.getUsersThunkCreator(userId)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        )
    }
}

const RedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const TakeParams = (props) => {
    return <RedirectComponent {...props} param={useParams()} />
}

export default connect(mapStateToProps, {
    setUserProfile, getUsersThunkCreator
})(TakeParams);