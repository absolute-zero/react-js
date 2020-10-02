import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls.module.css"

const maxLength30 = maxLength(30);
const minLength3 = minLength(3)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    };

    if (isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form action="" onSubmit={handleSubmit}>
            {
                error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>
            }

            {createField('Email', 'email', [required, maxLength30, minLength3], Input)}
            {createField('password', 'password', [required, maxLength30, minLength3], Input, {type: 'password'})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm);


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);