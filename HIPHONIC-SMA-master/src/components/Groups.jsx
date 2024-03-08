import React from 'react';
import "./Groups.scss"
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";

function Groups() {
    const groupData = [
      {
        icon: Group1,
        name: "Design Enthusiast",
      },
      {
        icon: Group2,
        name: "UI Official",
      },
      {
        icon: Group3,
        name: "Web Designer",
      },
    ];
  return (
    <div className="GroupItems">
      <div className="heading">
              <p >YOUR PAGE</p>
              <button className='see-all'>
          <p>See-all</p>
        </button> 
      </div>
      {groupData &&
        groupData.map((item, index) => (
          <div className="group-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Groups;