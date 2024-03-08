import ProfilePostCard from './ProfilePostCard';
import './ProfilePostList.scss';
import React from 'react';
import { useGetPostsQuery } from '../../features/posts/postApi';
import { ClipLoader } from 'react-spinners';

const PostList = () => {
    const { data: posts, error, isLoading, isError, isFetching } = useGetPostsQuery({ refetchOnReconnect: true });

    let latestPost = null;

    if (isError) {
        return <div>{error.data.message}</div>;
    }

    // Find the latest post
    if (posts && posts.length > 0) {
        latestPost = posts.reduce((prevPost, currentPost) => {
            return (new Date(prevPost.created_at) > new Date(currentPost.created_at)) ? prevPost : currentPost;
        });
    }

    // Function to extract time from date
    const extractTimeFromDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className='UserPostsList'>
            {isError && <div>{error.data.message}</div>}
            {(isLoading || isFetching) && <ClipLoader color='#000' loading={true} />}
            <section>
                {latestPost && <ProfilePostCard post={{ ...latestPost, created_at: extractTimeFromDate(latestPost.created_at) }} />}
            </section>
        </div>
    );
}

export default PostList;
