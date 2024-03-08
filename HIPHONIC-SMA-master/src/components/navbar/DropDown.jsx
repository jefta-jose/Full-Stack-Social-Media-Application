import React, { useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import './DropDown.scss'
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const navigate = useNavigate();

  const [isLoggedOut,setIsLoggedOut]=useState(false)

  const handledLoggedOut=()=>{
    setIsLoggedOut(true)
    localStorage.removeItem('loggedInUser')
    navigate('/')
  }

  return (
    <div className="drop-profile">
        
        <div className="logout-profile">
       <button onClick={handledLoggedOut}>
        <BiLogOutCircle/>
        <h4>Logout</h4>
       </button>
        </div>
        <div className="settings-profile">
       <button>
       <IoIosSettings />
        <h4>Setting</h4>
       </button>
        </div>
    </div>
  )
}

export default Dropdown;
