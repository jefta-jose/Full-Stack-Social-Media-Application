//ProfileStatusInput
import React, { useState, useEffect } from 'react';
import { useAddPostMutation } from '../../features/posts/postApi';
import Avatar from '../../assets/Avatar.png';
import './ProfileStatusInput.scss';

import { RxVideo } from "react-icons/rx";
import { LuImage } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";

const ProfileStatusInput = () => {
  const [postContent, setPostContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [addPost] = useAddPostMutation();

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  // Add video and image hidden form
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postContent.trim() !== '') {
      const postWithUserData = {
        content: postContent,
        videoUrl: videoUrl,
        imageUrl: imageUrl,
        UserID: user.user.UserID,
      };

      addPost(postWithUserData)
        .then((response) => {
          console.log('Post created successfully:', postWithUserData);
          setPostContent('');
          setVideoUrl('');
          setImageUrl('');
        })
        .catch((error) => {
          console.error('Error creating post:', error);
        });
    } else {
      console.log('No post content entered');
    }
  };

  return (
    <div className="ProfileStatusInput">
      <div className="ProfileStatusInputTopContainer">
        <div className="ProfileStatusInputTop">
          <div className="profilePic">
            <img src={Avatar} alt="User Avatar" />
          </div>
          <form className='statusPoster' onSubmit={handleSubmit}>
            <input
                className='statusinputContainers'
                placeholder="Write your post content..."
                value={postContent}
                onChange={handlePostContentChange}
              />
            {isVisible && (
            // <div className='statusPosters'>
              <input
                className='statusinputContainers'
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={handleImageUrlChange}
              />
              )}
              <button onClick={handleSubmit} style={{padding:"10px 20px 10px 20px"}}>Post</button>
          </form>
        </div>
      </div>
      <div className='ProfileStatusInputTopContainerButtons'>
        <div><RxVideo /> Live Video</div>
        <div><LuImage onClick={toggleVisibility}/> Image/Video</div>
        <div><FaRegStar /> Activity</div>
      </div>
    </div>
  );
};

export default ProfileStatusInput;
