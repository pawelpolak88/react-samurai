import React from "react";
import classes from "./Dialog.module.css"
import { NavLink } from "react-router-dom";

const Dialog = (props) => {

    return (
        <div className={classes.Dialog}>
            <div className={classes.avatar_wrapp}>
                <img className={classes.avatar} src={props.userAvatar} alt="avatar" />
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.item}>
                    {props.name}
                </NavLink>
            </div>

        </div>
    )
}

export default Dialog;