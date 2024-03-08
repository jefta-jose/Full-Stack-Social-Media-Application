// import stylefile
import './ProfileIntro.scss'

//import react icons
import { FaLocationDot } from "react-icons/fa6";

//import react
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CiLocationOn } from "react-icons/ci";
import { TbBriefcase } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { format } from 'date-fns';

const ProfileIntro = () => {
  // const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'))
    setUserDetails(storedUserDetails);
    const registeredDate=storedUserDetails.user.registeredDate
    // let currentDate = format(registeredDate, 'MM/dd/yyyy');
  console.log(registeredDate);
  },[])
  
    return (
      <div className="intro">
        <div className="Intro-top">
          <div className="intro-title">
            <p style={{ fontWeight: 600 }}>Intro</p>
          </div>
          <div className="intro-dots">
          < HiDotsHorizontal />
          </div>
        </div>
      <div className='profileAbout'>
        <p style={{ fontWeight: "500", color: "#64748B" }}>
        {userDetails.user && userDetails.user.bio}
        </p>
      </div>
      <div className="list">
        <div className="map-pin">
        < CiLocationOn />
          <p>{userDetails.user && userDetails.user.Location}</p>
        </div>
        <div className="Briefcase">
        <TbBriefcase />
          <p>{userDetails.user && userDetails.user.company_name}.</p>
        </div>
        <div className="Calender">
        <CiCalendarDate />
          <p>{userDetails.user && userDetails.user.registeredDate && format(userDetails.user.registeredDate, 'MMMM do yyyy')}</p>
        </div>
        <div className="link">
        <GoLink />
          <p>{userDetails.user && userDetails.user.website_link}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileIntro ;