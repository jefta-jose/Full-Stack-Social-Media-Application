import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import useTimeAgo from '../../Hooks/UseTimeAgo';
import './NotificationItem.scss';
import { usePatchNottificationMutation } from '../../features/notifications/notificationApi';

const NotificationItem = ({ notification }) => {
  const timeAgo = useTimeAgo(notification.created_at);
  const [isRead, setIsRead] = useState(true);
  const [clicked, setClicked] = useState(false); // New state for tracking click

  const [patchNottification] = usePatchNottificationMutation();

  const updateNotification = async () => {
    // Toggle the value of isRead
    setIsRead(true);
    setClicked(true); // Mark notification as clicked

    const res = await patchNottification({
      is_read: isRead,
      NotificationID: notification.NotificationID,
    });
    console.log(res);
  };

  return (
    <div
      className={`notification-item ${isRead ? 'read' : ''} ${clicked ? 'clicked' : ''}`}
      onClick={updateNotification}
    >
      <div>
        {clicked ? null : <div className="notification-dot"></div>}
      </div>
      <img
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        src={notification.profileImage}
        alt="profile image"
      />
      <span>{notification.message}</span>
      <div className="notification-time">
        <span>{timeAgo}</span>
        <div className="not-icon">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
