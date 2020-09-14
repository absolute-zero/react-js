import React from "react";
import styles from "./users.module.css";
import UserPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import cx from 'classnames'

let Users = (props) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }
    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id} className={cx(styles.flex, styles.user)}>
                        <div className={styles.user_photo}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                                     className={styles.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div className={cx(styles.userInfo)}>
                            <div>
                                    <span>
                                        <div>{user.name}</div>
                                        <div>{user.status}</div>
                                    </span>
                                {/*<span>*/}
                                {/*    <div>{'user.location.country'}</div>*/}
                                {/*    <div>{'user.location.city'}</div>*/}
                                {/*</span>*/}
                            </div>
                        </div>
                        <div className="ProfileInfo_contacts">
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon"></i>
                            <i className="demoIcon ProfileInfo_demoIcon
                                "></i>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }} className={cx(styles.userButton)}>
                                    Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }
                                } className={cx(styles.userButton)}>
                                    Follow
                                </button>
                            }
                        </div>
                    </div>
                )}
            {/*<div>*/}
            {/*    {pages.map(page => { // вывод количества страниц*/}
            {/*        if (page > 10) return // заглушка что бы не вырисовывались все страницы, а только 10 стр.*/}

            {/*        return <span className={props.currentPage === page && styles.selectedPage}*/}
            {/*                     onClick={(e) => {*/}
            {/*                         props.onPageChanged(page)*/}
            {/*                     }}>{page}*/}
            {/*        </span>*/}
            {/*    })}*/}
            {/*</div>*/}

            <div>
                     <span onClick={() => {
                         props.onPageChanged(props.currentPage, props.pageSize);
                     }}> show more </span>
            </div>
        </div>
    )
}

export default Users;