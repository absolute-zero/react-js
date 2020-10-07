import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    return (
        <div className={classes.descriptionBlock}>
            <div>
                <img src={props.profile.photos.large} alt="" className={classes.topImage}/>
                <div className={classes.contacts}>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf230;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xe802;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf189;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf099;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf16d;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf16a;</i>
                    <i className={`demoIcon ${classes.demoIcon}`}>&#xf09b;</i>
                </div>
            </div>
            <div>
                <div className={classes.name}>{props.profile.fullName}</div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <div className={classes.status}>{props.profile.lookingForAJobDescription}</div>
                <div className={classes.info}>
                    <div className={classes.infoElement}>
                        <span>Professional skills:</span>
                        <span className={classes.description}></span>
                    </div>
                    <div className={classes.infoElement}>
                        <span>About me:</span>
                        <span className={classes.description}>{props.profile.aboutMe}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;