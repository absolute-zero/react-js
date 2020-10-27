import React from 'react';
import {addPost, updateNewPostText, saveInfoAboutUser} from "../../../redux/profileReducer";
import ProfileInformation from "./ProfileInformation";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const ProfileInformationContainer = connect(mapStateToProps, {addPost, saveInfoAboutUser})(ProfileInformation);

export default ProfileInformationContainer;