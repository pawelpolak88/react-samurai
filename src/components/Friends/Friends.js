import React from "react";
import StoreContext from "../../StoreContext";
import classes from "./Friends.module.css"

const Friends = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().friendsPage

                let friendsElement = state.users
                    .map((m, key) =>
                        <div key={key} className={classes.Friends}>
                            <div className={classes.column}>
                                <img className={classes.avatar} alt="avatar" src={m.userAvatar} />
                            </div>
                            <div className={classes.column}>
                                {m.name}
                            </div>
                        </div>)

                return <>
                    {friendsElement}
                </>
            }}
        </StoreContext.Consumer>

    );
}

export default Friends;
