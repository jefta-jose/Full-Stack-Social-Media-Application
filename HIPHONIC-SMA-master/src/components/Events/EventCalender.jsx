import React from 'react'
import './EventCalendar.scss'
import NavIcon from '../shared/NavIcon';
import Calendar from '../../assets/calendar.png'


const EventCalendar = ({Eventmsg}) => {
  return (
    <div className="btn-events">
    <div>
    <NavIcon url={Calendar}/>
    </div>
      <h5>{Eventmsg}</h5>
  </div>
  )
}

export default EventCalendar;