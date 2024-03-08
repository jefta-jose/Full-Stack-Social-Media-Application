import React, { useEffect } from "react";
import Button from "../shared/Button";
import "./AllUsers.scss";
import { useAddFriendshipMutation } from "../../features/friends/friendApi";
import { ErrorToast, ToasterContainer, SuccessToast } from "../../toaster/Toaster"; 
import { LoadingToast } from "../../toaster/Toaster"; 

const AllUsers = ({ user, refetchNonFriendUsers  }) => {
  const [addFriendship]=useAddFriendshipMutation();
  const localStorageUser = JSON.parse(localStorage.getItem("loggedInUser"));

const userID1=localStorageUser.user.UserID
console.log(userID1);
// console.log(localStorageUser.user);

  const handleSubmit=async()=>{
  const response=await addFriendship({User1ID:userID1,User2ID:user.UserID})

  if(response.error){
    ErrorToast(response.error.data.message);

  }else{
    SuccessToast(response.data.message);
    refetchNonFriendUsers ()
  }
  }

  return (
    <>
    <ToasterContainer />
    <article className="Friendscard" key={user.userID}>
     <div>
     <img width={60} height={60} style={{borderRadius:'50%'}} src={user && user.profileImage} alt="avatar" />
     </div>
      <div className="friends-content">
        <h3>{user.Username}</h3>
        <div className="friendship-btn">
          <div className="friends-btn">
            <div className="add-friend-btn">
              <Button msg="Add friend" onClick={handleSubmit} />
            </div>
            <div className="remove-friend-btn">
              <Button msg="Remove" />
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  );
};

export default AllUsers;
