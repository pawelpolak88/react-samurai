import React from "react";
import { followActionCreater, unfollowActionCreater, setUsersActionCreater, setCurrentPageActionCreater, setUsersTotalCountActionCreater } from "../../redux/usersReducer"
import { connect } from "react-redux";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreater(pageNumber))
        },

        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreater(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
