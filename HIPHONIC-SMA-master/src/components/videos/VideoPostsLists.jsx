import React from "react";
import { useGetUserVideoQuery } from "../../features/Video/videoApi";
import { ClipLoader } from "react-spinners";
import VideoCard from "./MyVideoPost"

const VideoPostList = () => {
  const videoUploader = JSON.parse(localStorage.getItem("loggedInUser"))
  // console.log('video uploader',videoUploader);
  const UserID = videoUploader.user.UserID
  
  // console.log("The user id:",UserID);

  const { data: Video, error, isLoading, isError, isFetching } = useGetUserVideoQuery(UserID);
  // console.log("This is the logged posts:", Video);
  // console.log("video", Video);

    return (
    <div className="video-list">
      {isError && <div style={{color:"red"}}>{error.data.message}</div> }
      {(isLoading || isFetching) && <ClipLoader color="#000" loading={true}/>}
      <section>
        {Video && Video.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </section>
    </div>
    )
}

export default VideoPostList

