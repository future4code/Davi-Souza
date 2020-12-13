import React from 'react'
import logo from '../../logo.svg';
import { AppLogo, CardContainer, ProfileImg, ProfileInfo, AppLogoSpin } from './styles';

function ProfileCard(props) {
    const profile = props.profile


    return (
        <CardContainer>
            <ProfileImg src={profile.photo}/>
            <ProfileInfo>
                <p>{profile.name}, <span> {profile.age} </span></p>
                <p>{profile.bio}</p>
            </ProfileInfo>
        </CardContainer>
    )
}

export default ProfileCard