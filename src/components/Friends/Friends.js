import React from "react";
import classes from "./Friends.module.css"

const Friends = (props) => {
    let friendsElement = props.state.users
        .map((m, key) =>
            <div key={key} className={classes.Friends}>
                <div className={classes.column}>
                    <img className={classes.avatar} alt="avatar" src={m.userAvatar} />
                </div>
                <div className={classes.column}>
                    {m.name}
                </div>
            </div>)


    return (
        <>
            {friendsElement}
        </>
    );
}

export default Friends;
