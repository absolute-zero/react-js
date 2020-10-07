import React from "react";
import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import cx from 'classnames'

let Users = (props) => {
    return (
        <section>
            {
                props.users.map(user =>
                    <div key={user.id} className={cx(styles.flex, styles.user)}>
                        <div>
                            <div className={styles.user_photo}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                                         className={styles.usersPhoto}/>
                                    <div className={cx(styles.userInfo)}>
                                        <span>
                                            {user.name}
                                        </span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="ProfileInfo_contacts user">
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.unfollow(user.id)
                                        }}
                                        className={cx(styles.userButton)}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.follow(user.id)
                                        }}
                                        className={cx(styles.userButton)}>
                                    Follow
                                </button>
                            }
                        </div>
                    </div>
                )}
        </section>
    )
}

export default Users;