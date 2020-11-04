import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import cx from 'classnames'

function Navbar(props) {
    return (
        <nav className={props.active ? cx(classes.active, classes.nav): classes.nav} onClick={() => props.setActive(false)}>
            <div className={classes['nav-content']} onClick={(e) => e.stopPropagation()}>
                <NavLink to='/profile' className={classes.link} activeClassName={classes.activeLink}>
                    <span className={classes['link-logo-name']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M16,13.29A6.15,6.15,0,1,0,9.86,7.14,6.15,6.15,0,0,0,16,13.29ZM16,
                            3a4.15,4.15,0,1,1-4.14,4.14A4.15,4.15,0,0,1,16,3ZM27.38,26.81C26.18,29.9,20.72,31,16,
                            31S5.82,29.9,4.62,26.81c-.64-1.65-.07-4.1,1.49-6.39A12.11,12.11,0,0,1,16,15a12.24,12.24,
                            0,0,1,10.91,7.25,1,1,0,1,1-1.82.81A10.37,10.37,0,0,0,16,17a10.09,10.09,0,0,0-8.23,4.55c-1.34,
                            1.95-1.61,3.72-1.29,4.54C7.14,27.78,11.14,29,16,29s8.86-1.22,9.52-2.91a1,1,0,0,1,1.86.72Z"/>
                        </svg>
                    </span>
                    <span className={classes['link-name']}>Profile</span>
                </NavLink>
                <NavLink to='/friends' className={classes.link} activeClassName={classes.activeLink}>
                    <span className={classes['link-logo-name']}>
                        <svg viewBox="0 0 62 62" version="1.1">
                            <path
                                d="M51.81 35.962h-6.4c-.915 0-1.524-.61-1.524-1.524s.61-1.524 1.524-1.524h6.4c1.523 0 3.047-.304 4.571-.61.914-.304 1.524-.609 2.133-.914.61-.304.915-1.219.915-1.828 0-.61-.305-1.22-.61-1.829-1.524-1.828-4.267-3.047-7.924-4.266-.305 0-.305-.305-.61-.305-.914-.61-1.523-1.524-1.828-2.438 0-1.22.61-2.134 1.524-2.743 2.133-3.048 3.352-5.79 3.048-8.229-.305-1.523-.915-2.742-2.134-3.657-2.133-1.524-5.18-1.524-7.01 0-1.218.915-1.828 2.134-2.133 3.657-.304 2.438.915 5.181 3.048 8.229.61.61.305 1.524-.305 2.133-.61.61-1.524.305-2.133-.304-3.048-3.658-4.267-7.315-3.657-10.667.305-2.133 1.524-4.267 3.352-5.486 3.048-2.438 7.62-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.305.304-.305.609-.61.609 0 0 .305 0 .305.305 3.962 1.219 7.01 3.047 8.838 5.18.915.915 1.524 2.439 1.524 3.963a5.332 5.332 0 0 1-2.133 4.266c-.914.61-1.829 1.22-3.048 1.524-1.828 0-3.657.305-5.485.305z"
                                id="Shape"/>
                            <path
                                d="M18.59 35.962h-6.4c-2.133 0-3.961-.305-5.485-.914-1.22-.305-2.134-.915-3.048-1.524-1.219-.914-2.133-2.743-2.133-4.267 0-1.524.61-2.743 1.524-3.962 2.133-2.133 5.18-3.657 9.142-4.876 0 0 .305 0 .305-.305 0 0-.305-.304-.305-.61C9.143 15.849 7.62 11.887 8.23 8.839c.304-2.133 1.523-4.267 3.352-5.486 3.048-2.438 7.619-2.438 10.667 0 1.828 1.524 3.047 3.353 3.352 5.486.305 3.352-.914 7.01-3.657 10.667-.61.61-1.524.61-2.133.305-.61-.61-.915-1.524-.305-2.134 2.438-3.047 3.352-6.095 3.047-8.228 0-1.524-.914-2.743-2.133-3.658-2.133-1.523-4.876-1.523-7.01 0-1.219.915-2.133 2.134-2.133 3.353-.305 2.438.914 5.18 3.048 8.228.61.915 1.524 1.829 1.219 2.743 0 1.22-.914 1.829-1.829 2.438 0 0-.304.305-.61.305-3.352 1.524-5.79 2.743-7.618 4.572-.305.61-.61 1.219-.61 1.828 0 .914.305 1.524.914 1.829.61.304 1.22.61 2.134.914 1.219.61 2.743.914 4.266.914h6.4c.915 0 1.524.61 1.524 1.524s-.61 1.524-1.524 1.524z"
                                id="Shape"/>
                            <path
                                d="M38.4 62.476H25.905c-2.743 0-5.181-.305-7.315-1.219-1.523-.61-2.742-1.219-3.657-2.133-1.828-.914-2.743-3.048-2.743-5.181 0-1.829.61-3.353 1.829-4.876 2.438-2.743 6.4-4.877 11.886-6.705l.914-.914-.914-.915c-3.962-5.18-5.79-9.752-5.181-14.019.61-2.743 1.828-5.18 4.266-7.01 3.962-2.742 10.058-2.742 13.715 0 2.438 1.83 3.962 4.267 4.266 7.01.61 4.267-1.219 9.143-4.876 14.02-.914.914-.914 1.218-.914 1.218s.61.305.914.61c5.486 1.828 9.448 3.962 11.886 6.705 1.219 1.219 1.829 3.047 1.829 4.876 0 2.133-.915 4.267-2.439 5.486-.914.914-2.133 1.523-3.657 2.133-2.438.61-4.876.914-7.314.914zM32 20.114c-1.829 0-3.657.61-5.181 1.524-1.829 1.22-2.743 3.048-3.048 5.181-.304 3.352 1.22 7.314 4.267 11.581.914.914 1.829 1.829 1.524 3.352 0 1.22-1.22 2.134-2.133 3.048 0 0-.305.305-.61.305-5.18 1.524-8.533 3.657-10.971 6.095-.305.61-.61 1.829-.61 2.743 0 1.219.61 2.438 1.524 3.047.61.61 1.828 1.22 3.048 1.524 1.828.61 3.961.915 6.095.915H38.4c2.133 0 4.267-.305 6.095-.915 1.22-.304 2.134-.914 3.048-1.524.914-.609 1.524-1.828 1.524-3.047 0-.914-.305-2.133-1.22-2.743-2.133-2.438-5.79-4.267-10.97-6.095-.306 0-.306-.305-.61-.305-.915-.914-2.134-1.829-2.134-3.048s.915-2.438 1.829-3.352c3.048-3.962 4.571-8.229 4.267-11.581-.305-2.133-1.22-3.657-3.048-5.18-1.524-.915-3.352-1.525-5.181-1.525z"
                                id="Shape"/>
                        </svg>
                    </span>
                    <span className={classes['link-name']}>Users</span>
                </NavLink>
                <NavLink to='/dialogs' className={classes.link} activeClassName={classes.activeLink}>
                    <span className={classes['link-logo-name']}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path
                                d="M52,13H12a6,6,0,0,0-6,6V46a6,6,0,0,0,6,6H52a6,6,0,0,0,6-6V19A6,6,0,0,0,52,13Zm2,33a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V19a2,2,0,0,1,2-2H52a2,2,0,0,1,2,2Z"/>
                            <path
                                d="M47.91,19.32,32,29.62,16.09,19.32a2,2,0,0,0-2.18,3.36l17,11a2,2,0,0,0,2.18,0l17-11a2,2,0,1,0-2.18-3.36Z"/>
                        </svg>
                    </span>
                    <span className={classes['link-name']}>Message</span>
                </NavLink>


                {/*<NavLink to='/news' className={classes.link} activeClassName={classes.activeLink}>*/}
                {/*    <i className='demoIcon demoIcon_white'>&#xf1ea;</i>*/}
                {/*    <span className={classes.nameLink}>News</span>*/}
                {/*</NavLink>*/}
                {/*<NavLink to='/music' className={classes.link} activeClassName={classes.activeLink}>*/}
                {/*    <i className='demoIcon demoIcon_white'>&#xe801;</i>*/}
                {/*    <span className={classes.nameLink}>Music</span>*/}
                {/*</NavLink>*/}
            </div>
            <div className={classes.bg}/>
        </nav>
    );
}

export default Navbar;