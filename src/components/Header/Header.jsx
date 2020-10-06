import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './header.module.css'
import cx from 'classnames'

const Header = (props) => {
    return (
    <header className={classes.header}>
        <div className={classes.name}>
            {
                props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
            <div className={classes.arrow}/>
            <div className={classes.dropList}>
                <div>
                    <NavLink to={'/setting'}>Setting</NavLink>
                </div>
                <div onClick={props.logout}>Logout</div>
            </div>
        </div>
        <div>
            {/*<img src={user.photos.small != null ? user.photos.small : UserPhoto}*/}
            {/*     className={styles.usersPhoto}/>*/}
        </div>
    </header>
    );
};

export default Header;