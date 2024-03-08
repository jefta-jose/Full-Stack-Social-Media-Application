import React from "react";
import { useGetEventAttendeesQuery } from "../../features/EventAtendee/EventAtendeeApi";
import { useState } from "react";
import { useEffect } from "react";
import './EventMembersIcon.scss'

const MembersIcons = ({ EventID }) => {
  const [attendeeLength, setAttendeeLength] = useState(0); 

  const { data: attendeesData } = useGetEventAttendeesQuery(EventID);

  useEffect(() => {
    if (attendeesData) {
      setAttendeeLength(attendeesData.length);
    }
  }, [attendeesData]);

 
  console.log("new data", attendeesData);
  return (
    <div className="members-icons-container ">
      {attendeesData &&
        attendeesData.map((attendee) => (
          <div className="profile-Image" >
            <img src={attendee.profileImage} alt="" />
          </div>
        ))}
        <p>{attendeeLength}+ are going</p>
    </div>
  );
};

export default MembersIcons;
