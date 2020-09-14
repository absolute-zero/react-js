import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
                <NavLink to='/profile' className={classes.link} activeClassName={classes.activeLink}>
                    <i className='demoIcon demoIcon_white'>&#xf2be;</i>
                    <span className={classes.nameLink}>Profile</span>
                </NavLink>

                <NavLink to='/friends' className={classes.link} activeClassName={classes.activeLink}>
                    <i className='demoIcon demoIcon_white'>&#xe800;</i>
                    <span className={classes.nameLink}>Users</span>
                </NavLink>


                <NavLink to='/dialogs' className={classes.link} activeClassName={classes.activeLink}>
                    <i className='demoIcon demoIcon_white'>&#xf4ac;</i>
                    <span className={classes.nameLink}>Message</span>
                </NavLink>


                <NavLink to='/news' className={classes.link} activeClassName={classes.activeLink}>
                    <i className='demoIcon demoIcon_white'>&#xf1ea;</i>
                    <span className={classes.nameLink}>News</span>
                </NavLink>


                <NavLink to='/music' className={classes.link} activeClassName={classes.activeLink}>
                    <i className='demoIcon demoIcon_white'>&#xe801;</i>
                    <span className={classes.nameLink}>Music</span>
                </NavLink>

            {/*<div className={classes.item}>*/}
            {/*    <NavLink to='/setting' activeClassName={classes.activeLink}>Settings</NavLink>*/}
            {/*</div>*/}
        </nav>
    );
};

export default Navbar;