import React from "react";
import { followActionCreater, unfollowActionCreater, setUsersActionCreater } from "../../redux/usersReducer"
import { connect } from "react-redux";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreater(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
