import React from "react";
import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import cx from 'classnames'
import classes from "./users.module.css";

let Users = (props) => {
    return (
        <section className={cx(styles.flex, styles['user-container'])}>
            {
                props.users.map(user =>
                    <div key={user.id} className={classes.user}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                                         className={classes['user-photo']}/>
                                </div>
                                <span className={classes['user-info']}>
                                    {user.name}
                                </span>
                            </NavLink>
                        </div>
                        <div className={classes.connections}>
                            <div className={classes['connections-count']}>
                                <span className={classes['connections-count__grey']}>15</span> <br/> Friends
                            </div>
                            <div className={classes['connections-count']}>
                                <span className={classes['connections-count__grey']}>2</span> <br/> Posts
                            </div>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.unfollow(user.id)
                                        }}
                                        className={styles['user-button']}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.follow(user.id)
                                        }}
                                        className={styles['user-button']}>
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