import React, { useState } from 'react';
import xicon from '../../assets/close.close.png';
import './Notification.scss';
import { useGetNotificationQuery} from '../../features/notifications/notificationApi';
import NotificationItem from './NotificationItem';


const Notification = ({onClick}) => {
const loggedInUserNotification=JSON.parse(localStorage.getItem('loggedInUser'))
console.log(loggedInUserNotification);

const UserID=loggedInUserNotification.user.UserID
  const {data:Notifications}=useGetNotificationQuery(UserID)
  // console.log(Notifications);
  const notifications = Notifications || [];


  console.log(notifications);
  const [closeNotifications, setCloseNotifications] = useState(false);
      
      const handleNotificationsClick = () => {
        setCloseNotifications(true);
  };

  return (
    <div className="bigmain">
      <div className="notification">
        <div className="topNotification">
          <h4>Notification</h4>
          <button onClick={onClick}>
            <img src={xicon} alt="Close Icon" />
          </button>
        </div>
        <div className="allnote">
          <button type="button">All Notification</button>
          <button type="button">Unread</button>
        </div>
        <div className="day">
          <h4>Today</h4>
        </div>
        <div className='TodayNotification'>
        <div className="people">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))}
          </div>
          </div>
        
      </div>
    </div>
  );
}

export default Notification;


