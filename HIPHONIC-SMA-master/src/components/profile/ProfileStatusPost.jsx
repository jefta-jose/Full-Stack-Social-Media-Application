import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPostsQuery } from '../../features/posts/postApi.js';
import { useGetPostCommentQuery, useAddCommentMutation } from '../../features/Comments/CommentsApi.js';
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import Avatar from "../../assets/Avatar.png";
import './ProfilePostCard.scss';

const ProfileStatusPost = ({postId}) => { // Add postId as a prop to fetch comments for a specific post
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    const [commentContent, setCommentContent] = useState('');
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const [addComment] = useAddCommentMutation();

    const { data: comments, error, isLoading } = useGetPostCommentQuery(postId); // Fetch comments for the given postId

    const handlePostContentChange = (e) => {
        setCommentContent(e.target.value);
    }

    const handleCommentId = () => {
        console.log(comments); // Here you have access to comments fetched for the post
    }

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="profileStatusPost">
            {/* Display post content here */}
            <div className='profileStatusPostInteraction'>
                <div className="like" onClick={handleClick}><FaHeart /> {count} Likes</div>
                <div className="comment"><AiOutlineMessage onClick={toggleVisibility} />Comments</div>
                <div className="share"><GoShareAndroid/> 201 Share</div>
            </div>
            {isVisible && (
                <div className="comments">
                    {/* Render comments here */}
                    {comments && comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <p>{comment.content}</p>
                            <p>{comment.user}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProfileStatusPost;
