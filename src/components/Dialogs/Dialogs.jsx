import React from 'react';
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import {Input, Textarea} from "../common/FormsControls";
import Icon24LogoVk from "@vkontakte/icons/dist/24/send";

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogsData.map((dialog, index) => <DialogItem key={index} name={dialog.name}
                                                                         id={dialog.id}/>);

    let messagesElements =
        props.dialogsPage.messagesData.map((message, index) => <Message key={index} message={message.message}
                                                                        id={message.id}/>);

    let addMessage = (values) => {
        props.addMessage(values.newMessage);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addMessage}/>
        </div>
    )
};

const maxLength50 = maxLength(50);
const minLength2 = minLength(2);

const AddMessageForm = (props) => {
    return (
        <form className={classes.text} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newMessage" id="" cols="80" rows="1"
                   placeholder={'Enter your message'}
                   validate={[required, maxLength50]}
            />
            <button className={classes.button}>
                Send
            </button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;