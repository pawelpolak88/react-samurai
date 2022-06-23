import React from "react";
import classes from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "a7ae1cfc-4e90-4cb7-b083-6d3c4b2d4bbd"
                                                    }
                                                }
                                            )
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id);
                                                    }
                                                })
                                        }}>
                                            Unfollow
                                        </button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true, headers: {
                                                        "API-KEY": "a7ae1cfc-4e90-4cb7-b083-6d3c4b2d4bbd"
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id);
                                                    }
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