import React, { useState } from "react";
import "./JoinGroupCard.scss";
import GroupHeader from "./GroupHeader";
import PostsCard from "./PostsCard";
import { NavLink } from "react-router-dom";
import PostImageCard from "./PostImageCard";
import Button from "../shared/Button";
import MembersIcons from "../shared/MembersIcons";
import { useGetGroupsQuery } from "../../features/groups/groupApi";
import ClipLoader from "react-spinners/ClipLoader";
import {useAddGroupMemberMutation} from '../../features/groupMembers/groupMembersApi'
import { ErrorToast, ToasterContainer, SuccessToast } from "../../toaster/Toaster"; 


const JoinGroupCard = () => {
  const [showAllGroups, setShowAllGroups] = useState(false);

  const handleSeeAllToggle = () => {
    setShowAllGroups(!showAllGroups);
  };
  const loggedInMember=JSON.parse(localStorage.getItem('loggedInUser'))
  console.log();

  const MemberID=loggedInMember.user.UserID
  const {data,error, isLoading, isError, isFetching}=useGetGroupsQuery()


const [addGroupMember]=useAddGroupMemberMutation()


const handleJoinGroup = async (groupID) => {
  try {
    const response = await addGroupMember({ MemberID, GroupID: groupID }).unwrap();
console.log(response);
  console.log();
      if(response.message){
        SuccessToast(response.message);
      }else{
        ErrorToast("You are already member")

      }
    
  } catch (error) {
    ErrorToast("You are already member a member")
    console.log(error.data);
  }
};

  if (isLoading || isFetching) {
    return <ClipLoader color={"#000"} loading={isLoading} size={150} />;
  }
  if (isError) {
    return <div>😐: {error.data.message}</div>;
  }
  return (
    <div className="group-container">
       <ToasterContainer />
      <GroupHeader />
      <div className="group-sub-titles">
        <div className="sub-titles-left">
          <h4>Suggested for you</h4>
          <p>Groups you might be interested in.</p>
        </div>
        <div className="sub-titles-right">
          <p className="navlink"onClick={handleSeeAllToggle}>
          {showAllGroups ? "See Less" : "See All"}
          </p>
        </div>
      </div>
      <div className="group-card-container">
      {
  data && (showAllGroups ? data : data.slice(0, 2)).map((group, index) => (
    <div className="card-contents" key={`${group.GroupID}_${index}`}>
      <PostsCard group={group}/>
      <PostImageCard PostImage={group.group_image} />
      <div className="group-page-icon">
        <div className="group-btn-card">
          <Button onClick={()=>handleJoinGroup(group.GroupID)}  msg="Join Group" />
        </div>
        <div className="group-bottom">
          <MembersIcons MbrIcon={group.GroupID}  />
          
        </div>
      </div>
    </div>
  ))
}
      
      </div>
    </div>
  );
};

export default JoinGroupCard;
