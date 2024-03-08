import { useEffect, useState } from 'react';

const useTimeAgo = (timestamp) => {
  const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const createdAt = new Date(timestamp);
    const timeDifference = currentTime - createdAt;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? '' : 's'}`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'}`;
    } else if (hours < 24) {
      return `${hours} hour${hours === 1 ? '' : 's'}`;
    } else {
      return `${days} day${days === 1 ? '' : 's'}`;
    }
  };

  const [timeAgo, setTimeAgo] = useState(calculateTimeAgo(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(timestamp));
    }, 1000); 

    return () => clearInterval(interval);
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo;
