import React, { useState } from 'react';

//React icons
import { CiSearch } from 'react-icons/ci';
import { MdFileUpload } from "react-icons/md";
import { ClipLoader } from 'react-spinners';
import { MdAddCircle } from "react-icons/md";

//Stylefile
import './Videos.scss';

//Component
import VideoPostsList from "../../components/videos/VideoPostsLists"
import { VideoPost } from '../../components/videos/VideoPost';
import NewVideo from '../../components/videos/VideoForm';
import VideoCategoryList from '../../components/videos/videoCategoryList'
import CategoryInput from '../../components/videos/videoCategoryInput'

//Mutations
import { useGetVideosQuery } from '../../features/Video/videoApi';
import { useGetCategoriesQuery, useAddCategoryMutation } from '../../features/videoCategory/videoCategoryApi';

const Videos = () => {
  const [videoCaption, setVideoCaption] = useState('');
  const [videoCategoryName, setvideoCategoryName] = useState('');

// Video post
// All the videos functions
  const {data} = useGetVideosQuery()
  // console.log("This is the logged data items:",data);

// Add video hidden form
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

  return (
    <div className="Videos">
      <div className="videosTop">
        <div className="videosTopHeader">
          <div style={{ fontWeight:'700'}}>Video</div>
          <div>
            <CiSearch />
          </div>
        </div>
        <div className="videosTopContent">
          <div className="videosTopContentheader">
            <div>Categories to explore</div>
            <button style={{ color: '#2563EB' }}>See all</button>
          </div>
          <div className='videosTopContentBody'>
            <div className="videoCategories">
              <VideoCategoryList />
            </div>
            <div className='categoryInput'>
              <p  onClick={toggleVisibility}>Click to add new category</p>
              {isVisible && (
                <CategoryInput/>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="videosBottom">

        {/* This is the post list for post by the logged in user  */}
        <div className='myVideo'>
          <VideoPostsList />
        </div>

        {/* This is the input form to add a video post  */}
        <div className='addMyVideo'>
          <MdFileUpload style={{fontSize:'100px'}}  onClick={toggleVisibility}/>
          <p>Click to add a new video</p>
          {isVisible && (
          < NewVideo/>
          )}
        </div>
      </div>
      <div className='allVideos'></div>
    </div>
  );
};

export default Videos;
