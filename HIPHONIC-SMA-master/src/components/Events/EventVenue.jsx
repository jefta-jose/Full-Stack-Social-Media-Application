import React from 'react'
import NavIcon from '../shared/NavIcon'
import Location from '../../assets/location.png'
import './EventVenue.scss'

function EventVenue({location}) {
  return (
    <div className="venue-container">
        <div>
        <NavIcon url={Location}/>
        </div>
        <div className="venue-content">
            <p>{location}</p>
        </div>
    </div>
  )
}

export default EventVenue;