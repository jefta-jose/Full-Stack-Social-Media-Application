import React, { useState } from 'react';
import { useAddVideoMutation } from '../../features/Video/videoApi'; // Import the useAddVideoMutation hook
import './VideoForm.scss'

const VideoForm = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoCaption, setVideoCaption] = useState('');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [addVideo] = useAddVideoMutation();

  // Handle when the video URL field is changed
  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  // Handle when the video caption field is changed
  const handleVideoCaptionChange = (e) => {
    setVideoCaption(e.target.value);
  };

  // Handle when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (videoCaption.trim() !== '') {
      const videoWithUserData = {
        videoURL: videoUrl,
        videoCaption: videoCaption,
        UserID: user.user.UserID,
      }

      addVideo(videoWithUserData)
      .then((response) => {
        console.log('Video posted successfully:', videoWithUserData);
        setVideoUrl('');
        setVideoCaption('');
      });
    } else {
      console.log('No post content entered');
    }
  };

  return (
    <div className="myVInput">
      <form onSubmit={handleSubmit} className='videoInputForm'>
        <input
          type="text"
          value={videoUrl}
          onChange={handleVideoUrlChange}
          placeholder="Enter video URL..."
          required
        />
        <input
          type="text"
          value={videoCaption}
          onChange={handleVideoCaptionChange}
          placeholder="Enter video caption..."
          required
        />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default VideoForm;
