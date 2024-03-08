import React, { useState } from 'react';
import './Contacts.scss';
import { useGetUsersQuery } from '../features/user/userApi';

function Contacts() {
  const { data: users, error, isLoading, isError, isFetching } = useGetUsersQuery();
  const [showAll, setShowAll] = useState(false);

  const displayedUsers = showAll ? users : (users ? users.slice(0, 3) : []);

  const handleSeeAllClick = () => {
    setShowAll(!showAll);
  };

  console.log("Users to display:", displayedUsers);

  return (
    <div className="Contacts">
      <div className="Heading">
        <p style={{ textTransform: "uppercase" }}>Contacts</p>
        <button className='see-all' onClick={handleSeeAllClick}>
          <p>{showAll ? 'Show less' : 'See all'}</p>
        </button>
      </div>
      <div className="ContactsMenu">
        {displayedUsers &&
          displayedUsers.map((user) => (
            <div className='ContactContainer' key={user.UserID}>
              <div className="ContactItem">
                <img width={50} src={user.profileImage} alt={user.name} />
                <p>{user.Username}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contacts;
