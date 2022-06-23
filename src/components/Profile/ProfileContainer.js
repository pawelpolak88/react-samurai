import React from "react";
import { connect } from "react-redux"
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer"
import { useParams } from 'react-router-dom'
import { profileAPI } from "../../api/api"

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.param.userId
        if (!userId) userId = 2

        profileAPI.getUsers(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {
    setUserProfile
})(TakeParams);