import React from "react";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setToggleIsFetching,
    setTogglefollowingProgress,
} from "../../redux/usersReducer"
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api"

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader />
                    : < Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        setTogglefollowingProgress={this.props.setTogglefollowingProgress}
                        isFollowingInProgress={this.props.isFollowingInProgress}
                    />
                }


            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        setToggleIsFetching,
        setTogglefollowingProgress
    }
)(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreater(userId))
//         },

//         unfollow: (userId) => {
//             dispatch(unfollowActionCreater(userId))
//         },

//         setUsers: (users) => {
//             dispatch(setUsersActionCreater(users))
//         },

//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreater(pageNumber))
//         },

//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCountActionCreater(totalCount))
//         },
//         setToggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingActionCreater(isFetching))
//         }
//     }
// }
