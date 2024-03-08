import React, { useEffect, useState } from 'react';
import { useAddCommentMutation } from '../../features/Comments/CommentsApi.js';
import {useGetOnePostUIDQuery} from '../../features/posts/postApi.js';
// import { useGetCommentsQuery, useGetCommentQuery } from '../../features/Comments/CommentsApi.js';
import { TbMoodSmile } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import Avatar from "../../assets/Avatar.png";
import './ProfilePostCard.scss';
import CommentList from './PostCommentList.jsx';

const ProfileStatusPost = ({ post }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const [addComment] = useAddCommentMutation();

    // console.log("This is the logged post",post);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handlePostContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    //photo fetch
    const photoUploader=JSON.parse(localStorage.getItem("loggedInUser"))
    const userID=photoUploader.user.UserID
    const {data}=useGetOnePostUIDQuery(userID)

    // console.log("logged data",imageUrl);

    //Submit comment function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (commentContent.trim() !== '') {
            const commentWithUserId = { Content: commentContent, UserID: user.user.UserID, PostID: post.post_id };
            addComment(commentWithUserId)
                .then((response) => {
                    console.log('Comment sent!:', response);
                    setCommentContent('')
                })
                .catch((error) => {
                    console.error('Error sending the comment:', error);
                });
        } else {
            console.log('No post content entered');
        }
    };

    //Function to chech for user ID before posting
    const handlePostId = () => {
        console.log(post.post_id);
    };

    // Function to check if the post is from the logged-in user
    const isUserPost = () => {
        return user && post.UserID === user.user.UserID;
    };

    // Function to handle likes clicks
    const[count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    };


    return (
        <div className="profileStatusPost">
            {isUserPost() && ( // Only render the post if it belongs to the logged-in user
                <>
                    <div className='profileStatusPostHeader'>
                        <div className="profilePic">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="user">
                            <p className="username">User</p>
                            <p className="postDate">{post.post_date}</p>
                        </div>
                    </div>
                    <div className='profileStatusPostTextContent'>
                        <p>{post.content}</p>
                    </div>
                    <div className='profileStatusPostImageContent'>
<<<<<<< HEAD
                        <img src={post.imageUrl} alt="img" />
=======
                    <div className="images">
                        {data && Array.isArray(data) && data.map((photo) => (
                            <div key={photo.id} className="image-container">
                                <img src={photo.PhotoURL} alt={`Photo`} />

                        <div className="images">
        {/* {data && data.map((photo) => (
          <div key={photo.id} className="image-container">
            <img src={photo.PhotoURL} alt={`Photo`} />
              {comments && (
              <div className="comment">
                <p>{comments}</p>
              </div>
            )}
          </div>
        ))} */}
      </div>
                                {/* Render comments here if needed */}
                            </div>
                        ))}
                    </div>

>>>>>>> eb925481279bcdc753e3fb2fb7fa0d7ca45dc916
                    </div>
                    <div className='profileStatusPostInteraction'>
                        <div className="like" onClick={handleClick}><FaHeart />{count} Likes</div>
                        <div className="comment" onClick={toggleVisibility}><AiOutlineMessage />Comments</div>
                        <div className="share"><GoShareAndroid /> 201 Share</div>
                    </div>
                    <div>
                        <div className='profileStatusPostComment'>
                            <form onSubmit={handleSubmit} className='commentForm'>
                                <input onClick={handlePostId}
                                    className='commentInputArea'
                                    type="text"
                                    placeholder='Write your message...'
                                    value={commentContent}
                                    onChange={handlePostContentChange}
                                    required
                                />
                            </form>
                            <div className="btnIcons">
                                <TbMoodSmile />
                                <IoIosLink />
                            </div>
                        </div>
                        <div className="fetchedComments">
                            {isVisible && (
                                <div><CommentList PostID={post.post_id}/></div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileStatusPost;
