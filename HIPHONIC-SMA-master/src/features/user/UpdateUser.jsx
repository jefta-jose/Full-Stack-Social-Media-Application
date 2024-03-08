import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./UpdateUser.scss";
import { useUpdateUserMutation } from "./userApi";


const UpdateUser = ({ closeModal }) => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  console.log(user);
  const [updatePost] = useUpdateUserMutation();

  const [formData, setFormData] = useState({
    Username: user?.user.Username || "",
    TagName: user?.user.TagName || "",
    Location: user?.user.Location || "",
    company_name: user?.user.company_name || "",
    website_link: user?.user.website_link || "",
    profileImage: user?.user.profileImage || "",
  });

  const handleUpdate = async(e) => {
    e.preventDefault();
    const response = await updatePost(
      {
        ...formData,
        UserID: user?.user.UserID,
      },
      {
        headers: {
          Authorization: `${user.token}`,
        },
      }
    );
  
      console.log("love it", response.data);
    
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section  className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={handleUpdate}>
      <h2>Update Your Profile</h2>

        <div className="input-group">
          <input
            type="text"
            name="Username"
            id="Username"
            value={formData.Username}
            onChange={handleChange}
            placeholder="Username"
            
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="TagName"
            id="TagName"
            value={formData.TagName}
            onChange={handleChange}
            placeholder="TagName"
            
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Location"
            id="Location"
            value={formData.Location}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="company_name"
            id="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="company name"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="website_link"
            id="website_link"
            value={formData.website_link}
            onChange={handleChange}
            placeholder="Website Link"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="profileImage"
            id="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
            placeholder="Profile Image Link"
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </section>
  );
};

export default UpdateUser;
