import React from "react";
import Avatar from "../assets/Avatar.png";
import "./SideProfile.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function SideProfile() {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const[showProfile, setShowProfile]=useState(false)

  const handleProfile=()=>{
      setShowProfile(true)
      navigate("/profile");
      console.log("navigation");
  }
  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserDetails(storedUserDetails);
    console.log(storedUserDetails.user.Username);

    if (!storedUserDetails || !storedUserDetails.token) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className="sideProfile">
      <div className="SideImage">
        <img className="side-imgn-profile"  onClick={handleProfile} width={60} src={userDetails.user && userDetails.user.profileImage} alt="avatar" />
      </div>
      <div className="leftprofile">
        <p className="Profilename">{userDetails.user && userDetails.user.Username}</p>
        <p className="username">{userDetails.user && userDetails.user.TagName}</p>
      </div>
    </div>
  );
}

export default SideProfile;