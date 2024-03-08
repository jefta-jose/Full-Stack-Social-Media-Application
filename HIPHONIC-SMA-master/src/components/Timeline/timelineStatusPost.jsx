import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../features/posts/postApi.js';
import { useAddCommentMutation } from '../../features/Comments/CommentsApi.js';
import { useGetUserQuery } from '../../features/user/userApi.js';

//icons
import { TbMoodSmile } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

//import assets
import Avatar from "../../assets/Avatar.png"

//stylefile
import './timelineStatusPost.scss'

//import components
import CommentList from '../profile/PostCommentList.jsx';

const ProfileStatusPost = ({post}) => {

    //Comment action
    const [commentContent, setCommentContent] = useState('');
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        const [addComment] = useAddCommentMutation();
        const handlePostContentChange = (e) => {
            setCommentContent(e.target.value);
        }
console.log("post id here",post);
    //Likes action
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    //Comments action
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    //Submit comment functions
    const handleSubmit = (e) => {
        e.preventDefault();

            if (commentContent.trim() !== '') {
                const commentWithUserId = {Content: commentContent, UserID: user.user.UserID,PostID:post.post_id};
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
        }

    return (
        <div className="profileStatusPost">
            <div className='profileStatusPostHeader'>
                        <div className="profilePic">
                            <img src={Avatar} alt="err" />
                        </div>
                        <div className="user">
                            <p className="username">{user.username}</p>
                            <p className="postDate">{post.post_date}</p>
                        </div>
            </div>
            <div className='profileStatusPostTextContent'>
                <p>{post.content}</p>
            </div>
            <div className='profileStatusPostImageContent'>
                <img style={{borderRadius:"16px"}} src={post.imageUrl} alt="err" />
            </div>
            <div className='profileStatusPostInteraction'>
                <div className="like" onClick={handleClick}><FaHeart />{count} Likes</div>
                <div className="comment" onClick={toggleVisibility}><AiOutlineMessage/>{post.comments} Comments</div>
                <div className="share"><GoShareAndroid/> 201 Share</div>
            </div>
            <div>
            <div className='profileStatusPostComment'>
            <form onSubmit={handleSubmit} className='commentForm'>
                <input 
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
                    <div>
                        <CommentList PostID={post.post_id} />
                    </div>
                    )}
            </div>
            </div>
        </div>
    )
}
export default ProfileStatusPost;
