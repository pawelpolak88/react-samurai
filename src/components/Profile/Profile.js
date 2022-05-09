import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // console.log(props);
    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;