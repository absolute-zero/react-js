import React from "react";
import styles from "./FormsControls.module.css"

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div className={`${styles.formControl} ${hasError ? styles.error: undefined}`}>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>  }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return(
        <FormControl {...props}>
            <textarea {...restProps} {...input}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return(
        <FormControl {...props}>
            <input {...restProps} {...input}/>
        </FormControl>
    )
}

