import React, {useState} from 'react';

//import stylefile
import './VideoPost.scss'

export const VideoPost = (Category) => {
    // Add video hidden form
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };

    return (
    <div className='videoPostContainer'>
    <div className="videoPost">
        <div className="videoPreview">
        <video style={{borderRadius:"16px"}} height="100px" width="100%" controls autoPlay>
            <source src={Category.category.previewURL}/>
        </video>
        </div>
        <div className="videoPreviewInteractions">
            <div>{Category.category.categoryName}</div>
            {/* <div>Likes</div> */}
        </div>
        <div className="videoPostButton"  onClick={toggleVisibility}>
            <button>See all</button>
        </div>
        {isVisible && (
                <div className='categoryVideos'>Videos</div>
              )}
    </div>
    </div>
    )
}

export default VideoPost;