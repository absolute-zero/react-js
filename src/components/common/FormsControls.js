import React from "react";
import styles from "./FormsControls.module.css"
import {required} from "../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={`${styles.formControl} ${hasError ? styles.error : undefined}`}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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
            <input {...restProps} {...input}/>
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
