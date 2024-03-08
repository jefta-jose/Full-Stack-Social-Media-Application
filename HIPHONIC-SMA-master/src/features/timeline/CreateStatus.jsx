import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateStatus.scss";
import { useAddStatusMutation } from "./TimelineApi";



const CreateStatus = ({ closeModal }) => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID= user?.user?.UserID

  console.log(user);
  const [addStatus]=useAddStatusMutation()

  const submitStatus=(e)=>{
    e.preventDefault()
    addStatus({StatusText:e.target[0].value,ImagePath:e.target[1].value,UserID:UserID})
  }


  const handleClose = () => {
    closeModal();
  };


  return (
    <section  className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={submitStatus}>
      <h2>Upload Status Status</h2>

        <div className="input-group">
          <input
            type="text"
            name="StatusText"
            id="StatusText"
            placeholder="status Text"
            
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="ImagePath"
            id="ImagePath"
            
            placeholder="ImagePath"
            
          />
        </div> 
      
        <button type="submit">Upload</button>
      </form>
    </section>
  );
};

export default CreateStatus;
