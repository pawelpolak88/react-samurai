import React from "react";
import classes from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return (
        <div className={classes.Users}>
            {
                props.users
                    .map(u =>
                        <div key={u.id} className={classes.UsersContainer}>
                            <div className={classes.column}>
                                <div className={classes.photo}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img alt="user-img" src={u.photos.small != null ? u.photos.small : userPhoto} />
                                    </NavLink>

                                </div>
                                <div className={classes.btn}>
                                    {u.followed
                                        ? <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.setTogglefollowingProgress(true, u.id)
                                            usersAPI.unfollow(u.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id);
                                                    }
                                                    props.setTogglefollowingProgress(false, u.id)
                                                })
                                        }}>
                                            Unfollow
                                        </button>
                                        : <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.setTogglefollowingProgress(true, u.id)
                                            usersAPI.follow(u.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id);
                                                    }
                                                    props.setTogglefollowingProgress(false, u.id)
                                                })
                                        }}>
                                            Follow
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className={classes.column}>
                                <div className={classes.about}>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                            </div>
                        </div>
                    )
            }

            <div className={classes.pagination}>
                {pagesArray.map(p => {
                    return (
                        <span
                            key={p}
                            className={props.currentPage === p ? classes.selectedPage : ""}
                            onClick={(e) => props.onPageChanged(p)}>
                            {p}
                        </span>

                    );
                })}

            </div>
        </div >
    );
}

export default Users;