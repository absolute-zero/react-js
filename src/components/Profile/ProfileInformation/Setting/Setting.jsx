import React from "react";
import classes from './Setting.module.css'
import {createField, Input, Textarea} from "../../../common/FormsControls";
import {reduxForm} from "redux-form";
import cx from 'classnames'

const Setting = ({profile, saveInfoAboutUser}) => {
    const onSubmit = (formData) => {
        saveInfoAboutUser(formData)
    };
    return (
        <div>
            <SettingDataReduxForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
        </div>
    )
}

const SettingData = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.setting}>
            <div>
                <div className={classes['setting-item']}>
                    <span className={classes['setting-item-name']}>Full name:</span>
                    {createField('Full Name', 'fullName', [], Input)}
                </div>
                <div className={classes['setting-item']}>
                    <span className={classes['setting-item-name']}>Looking for a job:</span>
                    <label className={classes['checkbox-row']}>
                        <div className={cx(classes.checkbox, classes['checkbox-primary'])}>
                            <input type="checkbox" className={classes['checkbox-field']} value="14"/>
                            <span className={classes['checkbox-label']}/>
                        </div>
                        <span className={classes['filter-text']}>"Make your choose if you want to get a job"</span>
                    </label>
                </div>

                <div className={classes['setting-item']}>
                    <span className={classes['setting-item-name']}>Professional skills:</span>
                    {createField('Professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
                <div className={classes['setting-item']}>
                    <span className={classes['setting-item-name']}>About me:</span>
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
            </div>
            <div>
                <span className={classes['setting-item-name']}>Social networks:</span>
                {
                    profile &&
                    Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={ classes['setting-item']}>
                                <span className={classes['setting-item-network']}>{key}:</span>
                                {createField(key, 'contacts.' + key, [], Input)}
                            </div>
                        )
                    })
                }
            </div>
            {
                error &&
                <div>
                    {error}
                </div>
            }
            <div className={classes['setting-button--position']}>
                <button className={classes['setting-button']}>Save</button>
            </div>



        </form>
    )
}

const SettingDataReduxForm = reduxForm({form: 'setting-form'})(SettingData);

export default Setting;