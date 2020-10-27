import React from 'react';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInformationContainer from "./ProfileInformation/ProfileInformationContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    return (
            <div>
                <ProfileHeader profile={profile} status={status}
                               isOwner={isOwner}
                               updateStatus={updateStatus}
                               savePhoto = {savePhoto}/>
                <ProfileInformationContainer {...profile} status={status} updateStatus={updateStatus}/>
            </div>
    );
};

export default Profile;