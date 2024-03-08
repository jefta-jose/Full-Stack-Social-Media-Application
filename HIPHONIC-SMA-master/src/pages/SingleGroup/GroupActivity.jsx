import React from 'react'
import ActivityPoster from '../../components/shared/ActivityPoster';
import PostImageCard from '../../components/Groups/PostImageCard';
import { useGetGroupActivityPostsQuery } from '../../features/groups/groupPostApi';

const GroupActivity = ({GroupID}) => {
  console.log("group id",GroupID);
    const {data:groupsActivity,error, isLoading, isError, isFetching}=useGetGroupActivityPostsQuery(GroupID);
    console.log("data 4",groupsActivity);
  
    return (
     <div className="recent-activity-content">
      <h2>Group Activities</h2>
       {groupsActivity && groupsActivity.map(activity=>(
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
              {activity.Username} • <span>{activity.CreatedDate}mins ago</span>
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
    );
}

export default GroupActivity;


