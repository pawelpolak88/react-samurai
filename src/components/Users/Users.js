import React from "react";
import classes from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pagesArray = [];

        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }

        return (
            <div className={classes.Users}>


                {
                    this.props.users
                        .map(u =>
                            <div key={u.id} className={classes.UsersContainer}>
                                <div className={classes.column}>
                                    <div className={classes.photo}>
                                        <img alt="user-photo" src={u.photos.small != null ? u.photos.small : userPhoto} />
                                    </div>
                                    <div className={classes.btn}>
                                        {u.followed
                                            ? <button onClick={() => { this.props.unfollow(u.id) }}>
                                                Unfollow
                                            </button>
                                            : <button onClick={() => { this.props.follow(u.id) }}>
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
                                className={this.props.currentPage === p ? classes.selectedPage : ""}
                                onClick={(e) => this.onPageChanged(p)}>
                                {p}
                            </span>

                        );
                    })}

                </div>
            </div>
        );
    }
}

export default Users;