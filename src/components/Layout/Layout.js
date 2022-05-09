import React from "react";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={classes.content}>
            <Outlet />
        </div>
    );
}

export default Layout;