import React from 'react';
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/user.jpg";
import classes from './ProfileInfo.module.css';
import cx from 'classnames'
import {NavLink} from "react-router-dom";


const ProfileInfo = ({savePhoto, isOwner, profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>;
    }
    const onChangePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={classes['cover-image']}>

            </div>
            <div className={classes['border']}>
                <div className={cx(classes.information, 'app-wrapper')}>
                    <div className={classes['information-avatar']}>
                        <img src={profile.photos.large || UserPhoto} alt=""
                             className={classes['information-avatar-img']}/>
                        <h3 className={classes['information-avatar-name']}>{profile.fullName}</h3>
                        {/*{isOwner && <input type="file" onChange={onChangePhotoSelected}/>}*/ /*Добавление фото*/}
                    </div>
                    <nav className={classes['information-nav']}>
                        <NavLink to={`/profile/${profile.userId}/post`} className={classes['information-nav-element']}>
                            <div className={classes['information-nav-img']}>
                                <svg x="0px" y="0px" viewBox="0 0 50 50">
                                    <g id="Layer_1">
                                        <path
                                            d="M9 13H1v31c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5V1H9v12zM3 44V15h6v29c0 1.654-1.346 3-3 3s-3-1.346-3-3zm8-41h36v41c0 1.654-1.346 3-3 3H9.998c.03-.039.051-.084.079-.124.057-.081.107-.166.159-.251a4.887 4.887 0 0 0 .599-1.418c.023-.094.052-.184.07-.28.058-.301.095-.609.095-.927V3z"/>
                                        <path d="M15 8h28v2H15z"/>
                                        <path d="M19 13h20v2H19z"/>
                                        <path d="M31 21h12v2H31z"/>
                                        <path d="M31 26h12v2H31z"/>
                                        <path d="M27 21H15v12h12V21zm-2 10h-8v-8h8v8z"/>
                                        <path d="M31 31h12v2H31z"/>
                                        <path d="M15 36h12v2H15z"/>
                                        <path d="M31 36h12v2H31z"/>
                                        <path d="M15 41h12v2H15z"/>
                                        <path d="M31 41h12v2H31z"/>
                                    </g>
                                </svg>
                            </div>
                            <span className={classes['information-nav-name']}>Activity</span>
                        </NavLink>
                        <NavLink to={`/profile/${profile.userId}/information`}
                                 className={classes['information-nav-element']}>
                            <div className={classes['information-nav-img']}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M16,13.29A6.15,6.15,0,1,0,9.86,7.14,6.15,6.15,0,0,0,16,13.29ZM16,
                                    3a4.15,4.15,0,1,1-4.14,4.14A4.15,4.15,0,0,1,16,3ZM27.38,26.81C26.18,29.9,20.72,31,16,
                                    31S5.82,29.9,4.62,26.81c-.64-1.65-.07-4.1,1.49-6.39A12.11,12.11,0,0,1,16,15a12.24,12.24,
                                    0,0,1,10.91,7.25,1,1,0,1,1-1.82.81A10.37,10.37,0,0,0,16,17a10.09,10.09,0,0,0-8.23,4.55c-1.34,
                                    1.95-1.61,3.72-1.29,4.54C7.14,27.78,11.14,29,16,29s8.86-1.22,9.52-2.91a1,1,0,0,1,1.86.72Z"/>
                                </svg>
                            </div>
                            <span className={classes['information-nav-name']}>Profile</span>
                        </NavLink>
                        <NavLink to={`/profile/${profile.userId}/friends`}
                                 className={classes['information-nav-element']}>
                            <div className={classes['information-nav-img']}>
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
                            </div>
                            <span className={classes['information-nav-name']}>Friends</span>
                        </NavLink>
                        <NavLink to={`/profile/${profile.userId}/setting`}
                                 className={classes['information-nav-element']}>
                            <div className={classes['information-nav-img']}>
                                <svg enable-background="new 0 0 70 70" viewBox="0 0 70 70">
                                    <path
                                        d="M58.0959473,39.0869141c0.4135742-0.1328125,0.6938477-0.5175781,0.6938477-0.9521484v-6.2402344  c0-0.4345703-0.2807617-0.8193359-0.6943359-0.9521484l-5.8862305-1.8876953  c-0.2607422-0.7246094-0.527832-1.3701172-0.8081055-1.9541016l2.8291016-5.5195313  c0.1977539-0.3857422,0.1240234-0.8554688-0.1821289-1.1621094l-4.4101563-4.4199219  c-0.3066406-0.3085938-0.7758789-0.3808594-1.1621094-0.1845703l-5.5205078,2.8154297  c-0.6206055-0.3095703-1.2827148-0.5859375-1.9785156-0.8261719l-1.8842773-5.8935547  c-0.1328125-0.4140625-0.5175781-0.6953125-0.9526367-0.6953125h-6.2397461c-0.4335938,0-0.8178711,0.2792969-0.9516602,0.6923828  l-1.9047852,5.890625c-0.5966797,0.2070313-1.2832031,0.4716797-1.9794922,0.8193359l-5.4868164-2.8222656  c-0.3876953-0.1982422-0.8583984-0.1240234-1.1655273,0.1835938l-4.4199219,4.4306641  c-0.3056641,0.3066406-0.3793945,0.7744141-0.1826172,1.1601563l2.7973633,5.484375  c-0.3144531,0.6396484-0.5869141,1.3017578-0.8139648,1.9775391l-5.8696289,1.8916016  c-0.4121094,0.1328125-0.6918945,0.515625-0.6933594,0.9492188l-0.0195313,6.2402344  c-0.0014648,0.4345703,0.277832,0.8193359,0.690918,0.9541016l5.8930664,1.9140625  c0.2246094,0.6328125,0.4916992,1.2705078,0.8178711,1.9541016l-2.8125,5.5048828  c-0.1967773,0.3857422-0.1235352,0.8535156,0.1821289,1.1601563l4.3999023,4.4199219  c0.3061523,0.3076172,0.7758789,0.3857422,1.1621094,0.1855469l5.5175781-2.8095703  c0.6499023,0.3183594,1.2954102,0.5888672,1.9541016,0.8183594l1.9140625,5.8808594  c0.1337891,0.4121094,0.5175781,0.6904297,0.9506836,0.6904297h6.2397461c0.4331055,0,0.8168945-0.2783203,0.9506836-0.6904297  l1.9160156-5.8847656c0.6914063-0.2451172,1.3354492-0.5107422,1.9482422-0.8046875l5.5107422,2.8105469  c0.3876953,0.1962891,0.8540039,0.1220703,1.1611328-0.1826172l4.409668-4.4003906  c0.3061523-0.3056641,0.3813477-0.7744141,0.1850586-1.1601563l-2.8071289-5.5322266  c0.2939453-0.5927734,0.5625-1.2402344,0.8129883-1.9589844L58.0959473,39.0869141z M49.3781738,43.3867188l2.7114258,5.3427734  l-3.3818359,3.375l-5.3129883-2.7099609c-0.2880859-0.1484375-0.6274414-0.1464844-0.9135742,0.0019531  c-0.7924805,0.4101563-1.6445313,0.7626953-2.6040039,1.078125c-0.3022461,0.0996094-0.5395508,0.3378906-0.6376953,0.640625  l-1.8457031,5.6699219h-4.7875977l-1.8457031-5.6699219c-0.0996094-0.3066406-0.3417969-0.546875-0.6494141-0.6435547  c-0.8764648-0.2773438-1.7231445-0.6318359-2.5883789-1.0839844c-0.2861328-0.1484375-0.6279297-0.1513672-0.9165039-0.0039063  l-5.3212891,2.7089844l-3.3740234-3.3896484l2.7094727-5.3037109c0.1445313-0.2832031,0.1459961-0.6181641,0.0039063-0.9023438  c-0.4750977-0.9501953-0.8222656-1.7822266-1.0927734-2.6201172c-0.0986328-0.3046875-0.3374023-0.5439453-0.6425781-0.6435547  l-5.6762695-1.84375l0.0146484-4.7851563l5.6694336-1.8271484c0.3134766-0.1015625,0.5571289-0.3505859,0.6513672-0.6660156  c0.2675781-0.8945313,0.625-1.7636719,1.0639648-2.5859375c0.1538086-0.2880859,0.1572266-0.6337891,0.0083008-0.9248047  l-2.699707-5.2929688l3.3911133-3.3994141l5.3007813,2.7265625c0.2983398,0.1513672,0.6523438,0.1464844,0.9443359-0.015625  c0.7163086-0.3994141,1.4916992-0.7236328,2.59375-1.0839844c0.3041992-0.0986328,0.5424805-0.3378906,0.6411133-0.6425781  l1.8359375-5.6777344h4.7822266l1.8173828,5.6845703c0.0996094,0.3105469,0.34375,0.5527344,0.6542969,0.6494141  c0.9379883,0.2929688,1.809082,0.6582031,2.5888672,1.0839844c0.2900391,0.1572266,0.6396484,0.1630859,0.9335938,0.0126953  l5.3320313-2.71875l3.3823242,3.3896484l-2.7285156,5.3222656c-0.1479492,0.2890625-0.1464844,0.6318359,0.0039063,0.9189453  c0.3818359,0.7314453,0.7382813,1.5878906,1.0893555,2.6191406c0.1020508,0.2998047,0.3398438,0.5332031,0.6411133,0.6298828  l5.6655273,1.8173828V37.40625l-5.6757813,1.8261719c-0.3066406,0.0986328-0.5463867,0.3388672-0.6455078,0.6445313  c-0.3237305,1.0029297-0.6757813,1.8466797-1.0761719,2.5771484C49.2341309,42.7441406,49.2287598,43.0927734,49.3781738,43.3867188  z"/>
                                    <path
                                        d="M36.2541504,25.5644531c-5.2006836-0.6933594-9.9995117,2.9775391-10.6933594,8.1796875  c-0.3364258,2.5244141,0.3271484,5.0292969,1.8691406,7.0517578c1.5439453,2.0244141,3.7836914,3.3251953,6.3076172,3.6611328  c0.425293,0.0566406,0.8476563,0.0839844,1.265625,0.0839844c4.7050781,0,8.8120117-3.4921875,9.449707-8.2802734  C45.1462402,31.0585938,41.4685059,26.2597656,36.2541504,25.5644531z M42.470459,35.9970703  c-0.5483398,4.1201172-4.3393555,7.0273438-8.4692383,6.4775391c-1.9926758-0.265625-3.7617188-1.2919922-4.9804688-2.8916016  c-1.21875-1.5986328-1.7436523-3.578125-1.4775391-5.5751953c0.5029297-3.7744141,3.7402344-6.5273438,7.4492188-6.5273438  c0.3295898,0,0.6625977,0.0214844,0.9975586,0.0664063C40.111084,28.0966797,43.0178223,31.8867188,42.470459,35.9970703z"/>
                                </svg>
                            </div>
                            <span className={classes['information-nav-name']}>Setting</span>
                        </NavLink>
                    </nav>
                </div>
            </div>
            {/*<div>*/}


            {/*    <div className={classes.status}>{profile.lookingForAJobDescription}</div>*/}
            {/*    <div className={classes.info}>*/}
            {/*        <div className={classes.infoElement}>*/}
            {/*            <span>Professional skills:</span>*/}
            {/*            <span className={classes.description}></span>*/}
            {/*        </div>*/}
            {/*        <div className={classes.infoElement}>*/}
            {/*            <span>About me:</span>*/}
            {/*            <span className={classes.description}>{profile.aboutMe}</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<span>*/}
            {/*    Looking for a job: {profile.lokingForAJob ? 'Yes' : 'No'}*/}
            {/*</span>*/}
            {/*<span>*/}
            {/*    About Me: {profile.aboutMe}*/}
            {/*</span>*/}
            {/*{*/}
            {/*    profile.lokingForAJob &&*/}
            {/*    <span>*/}
            {/*        My professional skills: {profile.lookingForAJobDescription}*/}
            {/*    </span>*/}
            {/*}*/}
            {/*<span>*/}
            {/*    Full name: {profile.fullName}*/}
            {/*</span>*/}
            {/*<div>*/}
            {/*    {*/}
            {/*        Object.keys(profile.contacts).map(key => {*/}
            {/*            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
};

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default ProfileInfo;