import React, { useState } from "react";
import "./RecentActivityCard.scss";

import PostImageCard from "./PostImageCard";

import { useGetGroupPostsQuery } from "../../features/groups/groupPostApi";
import { format } from 'date-fns';
import ActivityPoster from "../shared/ActivityPoster";

const RecentActivityCard = () => {
  const {data,error, isLoading, isError, isFetching}=useGetGroupPostsQuery();
  console.log("data 4",data);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
   <div className="recent-activity-content">
    <div className="see-all">
    <p onClick={toggleShowAll}>{showAll ? 'See Less' : 'See All'}</p>
    </div>
    <div>
    {showAll ? data && data.map(activity=>(
      <div className="recent-card-container">
      <div className="recent-user">
        <div className="recent-icon">
          <div className="icon-user-initial">
            <h3>DE</h3>
          </div>
         <div className="img-recent">
         <ActivityPoster url={activity.profileImage} />
         </div>
        </div>
        <div className="recent-user-desc">
          <h4>{activity.GroupName}</h4>
          <p>
            {activity.Username} • <span>{ format(activity.CreatedDate, 'm')}mins ago</span>
          </p>
        </div>
      </div>
      <div className="recent-content-desc">
        <p>
          {activity.description}
        </p>
      </div>
      <div className="recent-images">
        <PostImageCard PostImage={activity.activity_photo} />
        <PostImageCard PostImage={activity.activity_photo} />
              </div>
    </div>
    ))
   : data && data.slice(0, 1).map(activity=>(
      <div className="recent-card-container">
      <div className="recent-user">
        <div className="recent-icon">
          <div className="icon-user-initial">
            <h3>DE</h3>
          </div>
         <div className="img-recent">
         <ActivityPoster url={activity.profileImage} />
         </div>
        </div>
        <div className="recent-user-desc">
          <h4>{activity.GroupName}</h4>
          <p>
            {activity.Username} • <span>{ format(activity.CreatedDate, 'm')}mins ago</span>
          </p>
        </div>
      </div>
      <div className="recent-content-desc">
        <p>
          {activity.description}
        </p>
      </div>
      <div className="recent-images">
        <PostImageCard PostImage={activity.activity_photo} />
        <PostImageCard PostImage={activity.activity_photo} />
              </div>
    </div>
    ))}
    </div>
   </div>
  );
};

export default RecentActivityCard;
