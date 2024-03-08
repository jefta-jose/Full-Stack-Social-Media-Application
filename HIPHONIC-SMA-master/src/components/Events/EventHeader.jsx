import React, { useState } from 'react';
import NavIcon from '../shared/NavIcon';
import Dots from '../../assets/dots.png';
import './EventHeader.scss';
import CreateEvent from '../../features/Events/CreateEvent'; 

const EventHeader = () => {
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const toggleCreateEvent = () => {
    setShowCreateEvent(!showCreateEvent);
  };

  return (
    <div className='events-page-header'>
      <div className="events-page-title">
        <h2>Find Event</h2>
     
      </div>
      <div className="events-page-icon">
        <div className="create">
      <button
  type="button"
  onClick={toggleCreateEvent}
 
>
  Create Event
</button>
      </div>
      </div>
      {showCreateEvent && <CreateEvent closeModal={toggleCreateEvent} />}
    </div>
  );
};

export default EventHeader;
