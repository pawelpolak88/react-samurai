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
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux";




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

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            setTogglefollowingProgress,
            getUsersThunkCreator,
            followThunkCreator,
            unfollowThunkCreator
        }
    ),
    WithAuthRedirect
)(UsersContainer)