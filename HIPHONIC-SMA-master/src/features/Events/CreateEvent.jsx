import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateEvent.scss";
import { useAddEventMutation } from "./EventPostApi";

const CreateEvent = ({ closeModal }) => {
  const [addEvent] = useAddEventMutation();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID = user.user.UserID;

  const [formData, setFormData] = useState({
    EventName: "",
    Description: "",
    EventDate: "",
    Location: "",
    EventPosterURL: ""
  });
console.log("form data",formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEvent({
        
        ...formData,
        CreatedByID: UserID
      });
      closeModal();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <section className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <input
        className="input-field"
          type="text"
          name="EventName"
          placeholder="Event Name"
          value={formData.EventName}
          onChange={handleChange}
          required
        />
        <input
        className="input-field"
          type="text"
          name="Description"
          placeholder="Event Description"
          value={formData.Description}
          onChange={handleChange}
          required
        />
        <input
        className="input-field"
          type="date"
          name="EventDate"
          value={formData.EventDate}
          onChange={handleChange}
          required
        />
        <input
        className="input-field"
          type="text"
          name="Location"
          placeholder="Event Location"
          value={formData.Location}
          onChange={handleChange}
          required
        />
        <input
        className="input-field"
          type="text"
          name="EventPosterURL"
          placeholder="Event Poster URL"
          value={formData.EventPosterURL}
          onChange={handleChange}
          required
        />

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateEvent;


