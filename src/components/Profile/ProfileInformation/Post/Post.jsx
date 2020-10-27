import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes['post-info']}>
                <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg" alt=""/>
                {props.message}
            </div>
            {/*<div><span>like</span> {props.likeCount}</div>*/}
        </div>

    );
};

export default Post;