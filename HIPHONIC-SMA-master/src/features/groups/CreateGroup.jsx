import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateGroup.scss";
import { useAddGroupMutation } from "./groupApi";



const CreateGroup = ({ closeModal }) => {
const [addGroup]=useAddGroupMutation()
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID= user?.user?.UserID

  console.log(user);

 

  const HandleSubmitGroup=(e)=>{
    e.preventDefault()
    addGroup({GroupName:e.target[0].value,Description:e.target[1].value,group_image:e.target[2].value,CreatedByID:UserID})
   
    closeModal();
  }


  const handleClose = () => {
    closeModal();
  };


  return (
    <section  className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={HandleSubmitGroup} >
      <h2>Create Group</h2>
      
      
  
        <div className="input-group">
          <input
            type="text"
            name="GroupName"
            id="GroupName"
            placeholder="Group Name"
            
          /> 
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Description"
            id="Description"
            placeholder="Group Description"          
          />
          
        </div>
        <div className="input-group">
          <input
            type="text"
            name="group_image"
            id="group_image"
            
            placeholder="Group image"
            
          />
        </div> 
      
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateGroup;
