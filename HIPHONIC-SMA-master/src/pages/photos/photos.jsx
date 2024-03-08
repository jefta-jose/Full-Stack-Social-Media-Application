// Photos.js
import React, { useState, useEffect } from 'react';
import './Photos.scss';
import PhotoForm from '../../components/photos/PhotoForm';
import { AiFillMessage } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";
import { useGetPhotosQuery, useGetAllPhotosQuery } from '../../features/Photos/Photoapi';
const Photos = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  const [userID, setUserID] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false); 

  useEffect(() => {
    const photoUploader = JSON.parse(localStorage.getItem("loggedInUser"));
    if (photoUploader) {
      const userID = photoUploader.user.UserID;
      setUserID(userID);
    }
  }, []);

  const { data: userPhotos } = useGetPhotosQuery(userID); 
  const { data: allPhotos } = useGetAllPhotosQuery(); 

  const handleAlbumsClick = () => {
    setShowAllPhotos(true); 
  };

  const handleYourPhotosClick = () => {
    setShowAllPhotos(false); 
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  
  const addPhotoUrl = (photoUrl) => {
    const newImagePaths = [...imagePaths, photoUrl];
    setImagePaths(newImagePaths);
    localStorage.setItem('imagePaths', JSON.stringify(newImagePaths));
  };

  return (
    <div className="photobum">
      <div className="yourphotos">
        <h1>Your Photos</h1>
        <div className='photoform'>
        
          <PhotoForm addPhotoUrl={addPhotoUrl} />
        </div>
      </div>
      <div className="photos-content">
        <h5>Photos About You</h5>
        <p onClick={handleYourPhotosClick}>Your Photos</p>
        <p onClick={handleAlbumsClick}>Albums</p>
      </div>
      <div className="total">
        <h5>Total Photos</h5>
        <p>{imagePaths.length} Total Photos About You</p>
      </div>
      <div className="images">
        {(showAllPhotos ? allPhotos : userPhotos) && (showAllPhotos ? allPhotos : userPhotos).map((photo) => (
          <div key={photo.id} className="image-container">
            <img src={photo.PhotoURL} alt={`Photo`} />
            <div className='photo-reaction'>
              <div onClick={() => handleClick()}>
                {count}<IoHeart />
              </div>
              <div>
                <AiFillMessage />
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.comment.value;
                  handleComment(comment);
                }}>
                  
                </form>
              </div>
            </div>
            {comments && (
              <div className="comment">
                <p>{comments}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;



