import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    // console.log(props);

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.ProfileInfo}>
            <div className={classes.background}>
                <img alt="prfile-img" src='https://it-tehnik.ru/wp-content/uploads/kak-posmotret-avatarku-v-diskorde-v-polnom-razmere_1.jpg' />
            </div>
            <div className={classes.description}>
                <div className={classes.profileImg}>
                    <img
                        alt="profile-img"
                        src={props.profile.photos.large || props.profile.photos.small}
                    />

                    <div className={classes.userInfo}>
                        <h3 className={classes.name}>{props.profile.fullName}</h3>
                        <h5 className={classes.about}>{props.profile.aboutMe}</h5>
                    </div>
                </div>


                {props.profile.lookingForAJob &&
                    <div className={classes.lookingForAJob}>
                        <div>{props.profile.lookingForAJobDescription}</div>
                    </div>
                }

                <div className={classes.contacts}>
                    <div className={classes.contactsItem}>{props.profile.contacts.facebook}</div>
                    <div className={classes.contactsItem}>{props.profile.contacts.github}</div>
                    <div className={classes.contactsItem}>{props.profile.contacts.instagram}</div>
                    <div className={classes.contactsItem}>{props.profile.contacts.twitter}</div>
                    <div className={classes.contactsItem}>{props.profile.contacts.vk}</div>
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;