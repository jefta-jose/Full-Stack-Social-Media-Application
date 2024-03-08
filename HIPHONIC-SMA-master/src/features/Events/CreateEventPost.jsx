import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateEventPost.scss";
import { useAddEventPostMutation } from "./eventsPostApi";

const CreateEventPost = ({ closeModal }) => {
  const [addEventPost] = useAddEventPostMutation();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID = user.user.UserID;

  const [formData, setFormData] = useState({
    description: "",
    event_image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitEventPost = (e) => {
    e.preventDefault();
    addEventPost({
      post_description: formData.description,
      post_image: formData.event_image,
      postedByID: UserID
    });
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <section className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={handleSubmitEventPost}>
        <h2>Create Event Post</h2>

        <div className="input-group">
          <input
            type="text"
            name="description"
            placeholder="Post Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="url"
            name="event_image"
            placeholder="Post Image URL"
            value={formData.event_image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default CreateEventPost;

