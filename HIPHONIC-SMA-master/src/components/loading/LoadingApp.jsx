import React from 'react';
import './LoadingApp.scss';
import Logo from '../../assets/logo.png'
import LoadingDot from './LoadingDot';


const LoadingApp = () => {
  return (
    <div className="loading">
        <img style={{width: "150px"}} src={Logo} alt="hiphonic App" />
        <h4>Welcome To Hiphonic</h4>
    <LoadingDot/>
    {/* <p>Loading your chats (1/5)</p> */}
  </div>
  )
}

export default LoadingApp
