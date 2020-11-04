import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from './header.module.css'
import cx from 'classnames'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={props.active ?
                cx(classes["burger-menu"], classes['is-open'])
                : cx(classes['burger-menu'], classes.closing)}>
                <div className={props.active ?
                    cx(classes['burger-click-region'], classes.active)
                    : classes['burger-click-region']} onClick={() => props.setActive(!props.active)}>
                    <span className={classes['burger-menu-piece']}/>
                    <span className={classes['burger-menu-piece']}/>
                    <span className={classes['burger-menu-piece']}/>
                </div>
            </div>
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
            {/*<div>*/}
            {/*    <img src={props.user.photos.small != null ? props.user.photos.small : props.UserPhoto}*/}
            {/*         className={classes.usersPhoto}/>*/}
            {/*</div>*/}
        </header>
    );
};

export default Header;