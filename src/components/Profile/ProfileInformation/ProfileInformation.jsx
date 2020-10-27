import React, {Suspense} from 'react';
import classes from './ProfileInformation.module.css';
import Post from "./Post/Post";
import Icon24LogoVk from '@vkontakte/icons/dist/24/send';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls";
import cx from 'classnames';
import {HashRouter, Route, withRouter} from "react-router-dom";
import Setting from "./Setting/Setting";
import MyInfo from "./MyInfo/MyInfo";


const maxLength15 = maxLength(15);
const minLength1 = minLength(1);

const ProfileInformation = React.memo(props => {
    let postElement =
        props.posts.map((post, index) => <Post key={index} message={post.message}
                                               likeCount={post.likeCount}/>);

    let addPost = (values) => {
        if (values.newPost) props.addPost(values.newPost);
    };

    return (
        <div className={cx('app-wrapper', 'container')}>
            <div className={classes.connections}>
                {/*<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>*/
                    /*Обновление статуса*/}
                <div className={classes['connections-count']}>
                    <span className={classes['connections-count__purple']}>15</span> <br/> Friends
                </div>
                <div className={classes['connections-count']}>
                    <span className={classes['connections-count__purple']}>2</span> <br/> Posts
                </div>
            </div>
            <div className={classes.content}>
                <Route path='/profile/:userId?/information'>
                    <MyInfo profile={props.profile}/>
                </Route>
                <Route path='/profile/:userId?/post'>
                    <div className={cx(classes.posts, 'app-wrapper')}>
                        <AddPostFormRedux onSubmit={addPost}/>
                        <div>
                            {postElement}
                        </div>
                    </div>
                </Route>
                <Route path='/profile/:userId?/friends'>
                    <Friends profile={props.profile}/>
                </Route>
                <Route path={'/profile/:userId?/setting'}>
                    <Setting profile={props.profile} saveInfoAboutUser={props.saveInfoAboutUser}/>
                </Route>
            </div>
        </div>
    );
});


const Friends = (props) => {
    return (
        <div className={cx(classes.posts, 'app-wrapper')}>
            {props.profile && props.profile.fullName}
            {/*fhkrjfe;fk,weijnfvlirevnj*/}
        </div>
    )
}


const AddPostForm = (props) => {
    return (
        <form
            className={classes.form}
            onSubmit={props.handleSubmit}>
            <Field component={Input} name={'newPost'} placeholder={'What is new with you'}
                   className={classes.newPost}
                   validate={[/*required,*/ minLength1]}
            />
            <span className={classes.bar}/>
            <button className={classes.button}>
                <Icon24LogoVk width={30} height={30} className={classes.qwe}/>
            </button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm)


export default ProfileInformation;