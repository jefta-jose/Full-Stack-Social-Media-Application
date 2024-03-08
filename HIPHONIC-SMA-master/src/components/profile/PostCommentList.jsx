import React, {useState} from 'react';
import PostCommentCard from './PostCommentCard.jsx';
import './PostCommentList.scss';
import { useGetPostCommentQuery } from '../../features/Comments/CommentsApi.js';
import { ClipLoader } from 'react-spinners';

const PostCommentList = ({PostID}) => {
    
    const { data: comments, error, isLoading, isError,isFetching } = useGetPostCommentQuery(PostID);
    console.log("This is the logged PostID:",PostID);

    console.log("This is the logged comments:",comments);

    if (isError) {
        return <div>{error?.data?.message || 'Error fetching comments'}</div>;
    }

    if (isLoading || isFetching) {
        return <ClipLoader color='#000' loading={true}/>;
    }

    return (
        <div className='PostCommentList'>
            <p style={{color:"white", padding:"10px 0 0 0"}}>Get all comments...</p>
            
            <section className='section'>
                {comments && comments.map((comment, index) => (
                <PostCommentCard key={comments.id} comment={comment} />
                ))}
            </section>
            <p style={{color:"white", padding:"10px 0 0 0"}}>The end of comments</p>
        </div>
    );
};

export default PostCommentList;
