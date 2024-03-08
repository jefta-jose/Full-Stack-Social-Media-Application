import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useGetNonFriendsUsersQuery, useGetUsersQuery } from './userApi';
import './UsersList.scss';
import AllUsers from '../../components/friends/AllUsers';

const usersList = () => {
  const { data: nonFriendUsers, error, isLoading, isError, isFetching ,refetch: refetchNonFriendUsers} = useGetNonFriendsUsersQuery();
  console.log(nonFriendUsers)
  // const userResponse=users.Users
    return (
      <div>
        {isError && <div>Error: {error.data}</div>}
        {isLoading || isFetching && <ClipLoader color="#000" loading={true} size={150} />}
        <div className="suggested-friends-title">
        <h2>People You Might Know</h2>
        </div>
        <section className='user-container'>
          {
            nonFriendUsers && nonFriendUsers.map((user) => (
              <AllUsers key={user.UserID} user={user} refetchNonFriendUsers={refetchNonFriendUsers} />
            ))
          }
        </section>
      </div>
    )
}

export default usersList;
