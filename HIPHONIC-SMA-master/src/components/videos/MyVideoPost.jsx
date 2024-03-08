// Import style file
import './MyVideoPost.scss';

// Import components
import User from '../profile/userInfocard';

// Import icons
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

// Import assets
import Play from '../../assets/Play.png';

// Import React
import React, { useState, useEffect } from 'react';

// Import the necessary query hook
// deletePost
import { useDeleteVideoMutation } from '../../features/Video/videoApi';

const Video = ({ video }) => {
    const [userDetails, setUserDetails] = useState({});

    // Fetch user from the logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Fetch video posts by the logged-in user
    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
        setUserDetails(storedUserDetails);
    }, []);

    //Delete button view and hide
    // Add video hidden form
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    //Delete post function
    const {deleteVideo} = useDeleteVideoMutation()
    const videoID = video.videoID
    const handleDelete = async (videoID) => {
        try {
            await deleteVideo({videoID})
        } catch (error) {
            console.log('Error deleting video post:', error);
        }
    };

    return (
        <div className='myVideo'>
            <div className='videosBottomProfile'>
                <div className='div'>
                <div className="profilePic">
                <img className="avatar"src={userDetails.user && userDetails.user.profileImage} alt="noimage" />
                </div>
                <div className="user">
                    <p className="username">{userDetails.user && userDetails.user.Username}</p>
                    <p>{video.UploadDate}</p>
                </div>
                </div>
                <div>
                <div style={{ color: "#94A3B8" }}><HiDotsHorizontal onClick={toggleVisibility}/>
                    <div>{isVisible && (
                        <button><MdDelete onClick={handleDelete} style={{fontSize:"17px"}}/></button>
                        )}
                    </div>
                </div>
                </div>
            </div>
            <div className='videosBottomPost'>
                <div className="myVideoView">
                    <div key={video.id} className="video-container">
                        <video controls autoPlay width="800px" height="400px">
                            <source src={video.videoURL} />
                        </video>
                    </div>
                    <div className="comment-container">
                        <p>{video.videoCaption}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
