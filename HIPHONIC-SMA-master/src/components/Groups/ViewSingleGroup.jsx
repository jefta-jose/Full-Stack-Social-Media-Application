import React, { useState } from 'react'
import './ViewSingleGroup.scss'
import { useNavigate } from 'react-router-dom';

const ViewSingleGroup = ({GroupID}) => {
  const navigate = useNavigate();

  const [showSingleGroup, setShowSingleGroup] = useState(false);
    const handleSingleGroupClick = () => {
      setShowSingleGroup(true);
      // setShowProfile(true)
    navigate(`/single/${GroupID}`);
        console.log("navigation");
    };

  return (
    <div className='view-single-group'>
      <div className="view-content"  onClick={handleSingleGroupClick}>
        <p>View</p>
      </div>
      <div className="edit-content">
        <p>Edit</p>
      </div>
    </div>
  )
}

export default ViewSingleGroup;
