import React from 'react';
import timeline from '../assets/layout-grid.png';
import friends from '../assets/users.png';
import groups from '../assets/star.png';
import video from '../assets/video.png'
import photos from '../assets/image.png';
import events from '../assets/calendar.png';
import './SideMenu.scss';
import { NavLink, useNavigate } from 'react-router-dom';

function SideMenu() {
  const items = [
    {
      name: 'Timeline',
      icon: timeline,
      path: '/timeline', 
    },
    {
      name: 'Friends',
      icon: friends,
      path: '/friends', 
    },
    {
      name: 'Groups',
      icon: groups,
      path: '/groups', 
    },
    {
      name: 'Videos',
      icon: video,
      path: '/videos', 
    },
    {
      name: 'Photos',
      icon: photos,
      path: '/photos', 
    },
    {
      name: 'Events',
      icon: events,
      path: '/events', 
    },
  ];

  return (
    <div className="side-menu">
      <div className="menu-heading">
        <h3>Menu</h3>
      </div>
      <div className="menu-down">
        {items &&
          items.map((item) => (
            <div key={item.path} className="menu-item" onClick={() => handleItemClick(item.path)}>
            <NavLink style={{textDecorationLine:"none"}}
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}

            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SideMenu;

