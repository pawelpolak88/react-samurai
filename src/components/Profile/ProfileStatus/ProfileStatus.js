import React from "react";
import classes from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateAditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateAditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={classes.ProfileStatus}>
                {!this.state.editMode &&
                    <div onClick={this.activateAditMode}>{this.props.status}</div>
                }
                {this.state.editMode &&
                    <input autoFocus onBlur={this.deactivateAditMode} onChange={this.deactivateAditMode} value={this.props.status} />
                }
            </div>
        );
    }
}

export default ProfileStatus;