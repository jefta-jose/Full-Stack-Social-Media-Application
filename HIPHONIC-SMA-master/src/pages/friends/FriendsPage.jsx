
import { useEffect,React, useState } from 'react';
import FriendsCard from '../../components/friends/FriendsCard';
import './FriendsPage.scss';
import Button from '../../components/shared/Button';
import UsersList from '../../features/user/UsersList'

const FriendsPage=()=>{

  const [displayFriends, setDisplayFriends] = useState(true);

  const handleFriendsClick = () => {
    console.log('Displaying FriendsCard');
    setDisplayFriends(true);
  };

  const handleSuggestionsClick = () => {
    console.log('Displaying UsersList');
    setDisplayFriends(false);
  };
    return (
       <div className="friends-right-content">
         <div className="friends-middle-content">
          <div className="general-friends-btn">
            <Button msg="Your Friends" onClick={handleFriendsClick} />
            <Button msg="Suggestions" onClick={handleSuggestionsClick} />
          </div>
         <div className="top">
         {displayFriends ? <FriendsCard /> : <UsersList />}  
        </div>
       
      </div>             
 </div>
    )
};

export default FriendsPage;

