import TimelinePostCard from '../../components/Timeline/timelineStatusPost'

import React from 'react'

import { useGetPostsQuery } from '../../features/posts/postApi'
import { ClipLoader } from 'react-spinners';

import './timelineStatusPostList.scss'

const PostList = () => {
    const { data: posts, error, isLoading, isError, isFetching } = useGetPostsQuery({ refetchOnReconnect: true });

    console.log("This is the logged posts:", posts);
    return (
        <div className='timelineStatusPostList'>
            {isError && <div>{error.data.message} </div> }
            {(isLoading || isFetching) && <ClipLoader color='#000' loading={true}/>}
            <section className='timelineListSection'>
                {posts && posts.map((post, index) => (
                    <TimelinePostCard key={index} post = {post}/>
                ))}
            </section>
        </div>
    )
}

export default PostList;