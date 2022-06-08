import React from "react";
import classes from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"

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
                                    <img alt="user-img" src={u.photos.small != null ? u.photos.small : userPhoto} />
                                </div>
                                <div className={classes.btn}>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}>
                                            Unfollow
                                        </button>
                                        : <button onClick={() => { props.follow(u.id) }}>
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
        </div>
    );
}

export default Users;