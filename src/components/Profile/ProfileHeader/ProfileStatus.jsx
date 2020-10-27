import React from "react";
import styles from './ProfileHeader.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) this.setState({
            status: this.props.status
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} className={styles.qwerty}>{this.props.status || `Change status`}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status}
                        onChange={this.onStatusChange}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;