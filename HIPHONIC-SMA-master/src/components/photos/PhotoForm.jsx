import React, { useState } from 'react';
import { useAddPhotoMutation } from '../../features/Photos/Photoapi';
import './PhotoForm.scss'

const PhotoForm = ({ addPhotoUrl }) => {
  const [photoUrl, setPhotoUrl] = useState('');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [addPhoto] = useAddPhotoMutation();

  const handlePhotoUrlChange = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (photoUrl.trim() !== '') {
      const photoWithUserId = { PhotoURL: photoUrl, UserID: user.user.UserID };
      addPhoto(photoWithUserId)
        .then((response) => {
          console.log('Photo uploaded successfully:', response);
          addPhotoUrl(photoUrl);
          setPhotoUrl('');
        })
        .catch((error) => {
          console.error('Error uploading photo:', error);
        });
    } else {
      console.log('No photo URL entered');
    }
  };

  return (
    <div className="add-photo-form">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Enter photo URL"
            value={photoUrl}
            onChange={handlePhotoUrlChange}
            required
          />
        </div>
        <button id='uploadbutton' type="submit">Upload Photo</button>
      </form>
    </div>
  );
};

export default PhotoForm;

