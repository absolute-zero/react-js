import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";
import classes from "../Profile/MyPosts/MyPosts.module.css";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div>
            <div className={`${styles.formControl} ${hasError ? styles.error : undefined}`}>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...restProps} {...input}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...restProps} {...input} className={classes.newPost} autoComplete='off'/>
            <span className={classes.bar}/>
        </FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field name={name} placeholder={placeholder}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
)
