import React from 'react'
import './EventImageCard.scss'
const EventImageCard = ({EventMsg,eventIcon,EventImage}) => {
  return (
    <div className="event-image-card">
        <div className="event-image-top">
        <h3>{EventMsg}</h3>
        <img src={eventIcon} alt="" />
        </div>
    <div className="event-card-image">
      <img src={EventImage} style={{width:'100%'}} alt="post Image" />
    </div>
    
  </div>
  )
}

export default EventImageCard