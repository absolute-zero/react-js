import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import Icon24LogoVk from '@vkontakte/icons/dist/24/send';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls";

const maxLength15 = maxLength(15);
const minLength2 = minLength(2);

const MyPosts = (props) => {
    let postElement =
        props.posts.map((post, index) => <Post key={index} message={post.message} likeCount={post.likeCount}/>);

    let addPost = (values) => {
        props.addPost(values.newPost)
    };

    return (
        <div className={classes.postsBlock}>
            <div className={classes.border}>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={`${classes.posts} ${classes.border}`}>
                {postElement}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <form
            className={classes.form}
            onSubmit={props.handleSubmit}>
            <Field component={Input} name={'newPost'} placeholder={'What is new with you'}
                   className={classes.newPost}
                   validate={[required, maxLength15, minLength2]}
                   autocomplete="off"
            />
            <span className={classes.bar}/>
            <button className={classes.button}>
                <Icon24LogoVk width={30} height={30}/>
            </button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'}) (AddPostForm)

export default MyPosts;