import React from 'react'
import './MembersIcons.scss'
import { useGetGroupMembersQuery } from '../../features/groupMembers/groupMembersApi'

const MembersIcons = ({MbrIcon}) => {
  const {data,error, isLoading, isError, isFetching}=useGetGroupMembersQuery(MbrIcon)
  console.log(data);
  console.log("MbrIcon",MbrIcon);
  const numberOfMembers = data ? data.length : 0;

  return (
    <div className='members-images'>
      {data && data.map(member=>(
        <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={member.profileImage} alt="" />
      ))}
      <div className="group-para">
            <p>{numberOfMembers}</p>
          </div>
    
    </div>
  )
}

export default MembersIcons
