import React, { useState } from "react";
import "./TimelineUpdates.scss";

import { createPortal } from 'react-dom';

import { IoAddCircleOutline } from "react-icons/io5";
import { useGetStatusQuery } from "../../features/timeline/TimelineApi";
import CreateStatus  from '../../features/timeline/CreateStatus'

const TimelineUpdates = () => {
    // const [editingUserId, setEditingUserId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { data: statuses, error, isLoading, isError, isFetching } = useGetStatusQuery();
    console.log(statuses);

    const loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUser"));
    const User= loggedInUserDetails?.user


    const handleEdit = () => {
      setShowModal(true);
    };
  
    
    
  
    const closeModal = () => {
      setShowModal(false);
    };
  return (
    <div className="timeContainer">
      <div className="timeline-menu">
        <div className="timeline-heading">
          <h2>Your Timeline</h2>
        </div>

        <div className="timelines">
          <div className="first-icons">
            <div className="user-items">
              <div className="you-user">
                <img width={50} src={User.profileImage}  alt={name} />
              </div>
              <div className="plus-icon">
              <IoAddCircleOutline onClick={handleEdit} />
              </div>
            </div>
            <p>You</p>
          </div>
          {statuses &&
            statuses.map((status) => (
              <div className="timeline" key={status.StatusID}>
                <div className="timeline-card-top">
                  <img width={40} src={status.ImagePath} alt="profile img" />
                  <p>{status.Username}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {
          showModal && createPortal(
            <CreateStatus closeModal={closeModal}  />,
            document.body
          )
        }
    </div>
  );
};
export default TimelineUpdates;
