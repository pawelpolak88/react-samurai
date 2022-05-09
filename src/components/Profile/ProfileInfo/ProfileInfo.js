import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={classes.ProfileInfo}>
            <div className={classes.background}>
                <img alt="prfile-img" src='https://it-tehnik.ru/wp-content/uploads/kak-posmotret-avatarku-v-diskorde-v-polnom-razmere_1.jpg' />
            </div>
            <div className={classes.description}>
                <img alt="prfile-img" src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8f160b5e9d954380c4b14b0f5ff4295ec9c141df_full.jpg' />
            </div>
        </div>
    );
}

export default ProfileInfo;