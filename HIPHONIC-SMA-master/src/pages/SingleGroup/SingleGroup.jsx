import React from "react";
import PostsCard from "../../components/Groups/PostsCard";
import PostImageCard from "../../components/Groups/PostImageCard";
import Button from "../../components/shared/Button";
import MembersIcons from "../../components/shared/MembersIcons";
import GroupHeader from "../../components/Groups/GroupHeader";
import {
  useGetGroupQuery,
  useGetGroupsQuery,
} from "../../features/groups/groupApi";
import {
  ErrorToast,
  ToasterContainer,
  SuccessToast,
} from "../../toaster/Toaster";
import "./SingleGroup.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import CreateGroupPost from "../../features/groups/CreateGroupPost";
import RecentActivityCard from "../../components/Groups/RecentActivityCard";
import GroupActivity from "./GroupActivity";

const SingleGroup = () => {
  const { GroupID } = useParams();

  const loggedInMember = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log();

  const { data, error, isLoading, isError } = useGetGroupQuery(GroupID);
  console.log("Fetched group data:", data);

  if (isLoading) {
    return <ClipLoader color={"#000"} loading={isLoading} size={150} />;
  }
  if (isError) {
    return <div>😐: {error.data.message}</div>;
  }
  return (
    <div className="single-group-container">
      {/* <ToasterContainer /> */}
      {/* <GroupHeader /> */}
      <div className="single-recent-sub-titles">
        <div className="sub-titles-left">
          <h2 style={{ textAlign: "center" }}>Welcome To this Group</h2>
          <p style={{ textAlign: "center" }}>
            You can Message The admin and be able to create an activity.
          </p>
        </div>
        {/* <div className="sub-titles-right">
          <p className="navlink">See All</p>
        </div> */}
      </div>
      <div className="recent-group-card-container">
        {data &&
          data.map((group) => (
            <div className="card-contents" key={group.GroupID}>
              <div className="post-card-head">
                <div className="post-card-left-items">
                  <div className="main-post-card-user">
                    <div className="post-card-user">
                      <h4>UD</h4>
                    </div>
                  </div>
                  <div className="post-card-user-desc">
                    <h4>{group.GroupName}</h4>
                    <p>
                      Bandung • <span>7 posts a day</span>
                    </p>
                  </div>
                </div>
                <div className="post-icon-card"></div>
              </div>
              <div className="post-image">
                <PostImageCard PostImage={group.group_image} />
              </div>
              <div className="group-page-icon">
                <div className="group-btn-card">
                  <Button msg="Join Group" />
                </div>
                <div className="group-bottom">
                  <MembersIcons MbrIcon={group.GroupID} />
                </div>
              </div>
              <CreateGroupPost/>
              <GroupActivity GroupID={group.GroupID}/>
            </div>
           
          ))}
      </div>
      
      <div>
        
      </div>
    </div>
  );
};

export default SingleGroup;
