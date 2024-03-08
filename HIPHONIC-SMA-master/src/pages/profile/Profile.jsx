// import stylefile
import './Profile.scss'

//import components
import CompleProfile from '../../components/profile/CompleteProfile'
import ProfilePhotos from '../../components/profile/ProfilePhotos'
import ProfileStatusInput from '../../components/profile/ProfileStatusInput'
import ProfileStatusPost from '../../components/profile/ProfilePostList'
import TopProfile from '../../components/profile/TopProfile'
import ProfileIntro from '../../components/profile/ProfileIntro'
//import react features
import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    return (
      <div className="profileContainer">
        <div className="ProfileContentTop">
        <TopProfile/>
               </div>
        <div className="ProfileContentBottom">
          <div className="ProfileContentBottomLeft">
            <div className="completeProfile">
              <CompleProfile />
            </div>
            <div className="intro">
              <ProfileIntro />
            </div>
            <div className="photos">
              <ProfilePhotos />
            </div>
          </div>
          <div className="ProfileContentBottomRight">
            <div className="statusInput">
              <ProfileStatusInput />
            </div>
            <div className="statusPost">
              <ProfileStatusPost />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;