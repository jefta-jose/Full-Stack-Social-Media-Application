import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateGroupPost.scss";
import { useAddGroupPostMutation } from "./groupPostApi";
import { useParams } from "react-router-dom";
import { ToasterContainer,SuccessToast,ErrorToast } from "../../toaster/Toaster";



const CreateGroupPost = ({ closeModal }) => {
  const { GroupID } = useParams();
  const [formValues, setFormValues] = useState({
    description: "",
    activity_photo: "",
  });
const [addGroupPost]=useAddGroupPostMutation()
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID= user?.user?.UserID

  console.log(user);

  GroupID

  const HandleSubmitGroupPost=async(e)=>{
    e.preventDefault()
    await addGroupPost({
      description: formValues.description,
      activity_photo: formValues.activity_photo,
      UploadedByID: UserID,
      GroupID: GroupID,
    });
    console.log(response);
    resetForm()
  }

  const resetForm = () => {
    setFormValues({
      description: "",
      activity_photo: "",
    });
  };


  const handleClose = () => {
    closeModal();
  };

  const onSubmit=()=>{
    console.log("I can submit");
  }


  return (
    <div className="singlegroup-page">
      <ToasterContainer />
      <div className='container-single-group'>
        <div className="header">
          <h3>Post What you have in mind</h3>
        </div>
        <form onSubmit={HandleSubmitGroupPost}>
          <div className="form-inputs">
            <label htmlFor="description" className='username'>
              <input type="text" id="description" name="description" placeholder="Description"  value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }/>
            </label>
            
            <label htmlFor="activity_photo" className='password'>
              <input type="text" id="activity_photo" name="activity_photo" placeholder="Activity photo"  value={formValues.activity_photo}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    activity_photo: e.target.value,
                  })
                } />
            </label>
           
          </div>
    
          <button type="submit" >Post</button>
        </form>
       
      </div>
    </div>
  )
};

export default CreateGroupPost;
