import React from "react";
import classes from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={classes.Users}>
            {
                props.users
                    .map(u =>
                        <div key={u.id} className={classes.UsersContainer}>
                            <div className={classes.column}>
                                <div className={classes.photo}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
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
                                {/* <div className={classes.location}>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </div> */}
                            </div>
                        </div>
                    )
            }
        </div>
    );
}

export default Users;