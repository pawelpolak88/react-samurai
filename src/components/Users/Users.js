import React from "react";
import classes from "./Users.module.css"

const Users = (props) => {
    return (
        <div className={classes.Users}>
            {
                props.users
                    .map(u =>
                        <div key={u.id} className={classes.UsersContainer}>
                            <div className={classes.column}>
                                <div className={classes.photo}>
                                    <img src={u.photoUrl} />
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
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div className={classes.location}>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Users;