import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls.module.css"

const maxLength30 = maxLength(30);
const minLength3 = minLength(3)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.Email, formData.password, formData.rememberMe)
        console.log(formData)
    };

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            {
                props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <Field name={'Email'} placeholder={'Email'} component={Input}
                       validate={[required, maxLength30, minLength3]}/>
            </div>
            <div>
                <Field name={'password'}  type={`password`} placeholder={'Password'} component={Input}
                       validate={[required, maxLength30, minLength3]}/>
            </div>
            <div>
                <Field name={'rememberMe'} id={'rememberMe'} type="checkbox" component={'input'}/>
                <label htmlFor="rememberMe">Remember me</label>
            </div>
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