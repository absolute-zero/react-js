import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './header.module.css'

const Header = (props) => {
    return (
    <header className={classes.header}>
        <div className={classes.name}>
            { props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        {/*<button onClick={props.logout}>Logout</button>*/}
        <div>
            {/*<img src={user.photos.small != null ? user.photos.small : UserPhoto}*/}
            {/*     className={styles.usersPhoto}/>*/}
        </div>
    </header>
    );
};

export default Header;