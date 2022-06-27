import React from "react";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTogglefollowingProgress,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
} from "../../redux/usersReducer"
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
                        isFollowingInProgress={this.props.isFollowingInProgress}
                        followThunkCreator={this.props.followThunkCreator}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
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
        setCurrentPage,
        setTogglefollowingProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
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
