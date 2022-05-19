import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.Header}>
            <img alt='header logo' src='https://habrastorage.org/getpro/habr/upload_files/38b/b4f/59b/38bb4f59b2f4ef59fbae546dbc239b2f' />
        </header>
    )
}

export default Header;