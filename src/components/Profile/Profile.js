import React from "react";
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    // console.log(props);
    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;