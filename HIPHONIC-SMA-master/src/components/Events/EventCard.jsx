import React, { useState } from "react";
import "./EventCard.scss";
import EventHeader from "./EventHeader";
import Heart2 from "../../assets/heart2.png";
import Button from "../shared/Button";
import EventMembersIcons from "../shared/EventMembersIcon";
import EventCalendar from "./EventCalender";
import EventVenue from "./EventVenue";
import EventImageCard from "./EventImageCard";
import { useGetEventsQuery } from "../../features/Events/EventPostApi";
import { useCreateEventAttendeeMutation, useGetEventsRegisteredByUserQuery } from "../../features/EventAtendee/EventAtendeeApi";
import { ToasterContainer, ErrorToast, SuccessToast } from "../../toaster/Toaster";

const EventCard = () => {
  const { data: allEvents } = useGetEventsQuery();

const UserId=JSON.parse(localStorage.getItem("loggedInUser"))
const loggedInUserId=UserId.user.UserID
console.log("logged in",loggedInUserId)
  const { data: registeredEvents } = useGetEventsRegisteredByUserQuery(loggedInUserId);
  const [showRegisteredEvents, setShowRegisteredEvents] = useState(false);
console.log("registered users",registeredEvents)

  const [createEventAttendee] = useCreateEventAttendeeMutation();

  const handleRegister = async (EventID) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const loggedInUserId = user.user.UserID;

    console.log("event details", { EventID: EventID, AttendeeID: loggedInUserId });
    try {
      const response = await createEventAttendee({ EventID: EventID, AttendeeID: loggedInUserId }).unwrap();
      console.log("first error checking", response.error);
      if (response.error) {
        ErrorToast(response.error);
      } else {
        SuccessToast(response.message);
      }
    } catch (error) {
      console.log(error.error);
    }
  };

  return (
    <div className="event-container">
      <ToasterContainer />
      <div className="events-top">
        <EventHeader />
      </div>
      <div className="event-sub-titles">
        <div className="h4title">
          <h4 onClick={() =>setShowRegisteredEvents (false)}>Popular</h4>
          <h4>For You</h4>
          <h4>Nearest</h4>
          <h4>Favorite</h4>
          <h4 onClick={() => setShowRegisteredEvents (true)}>Registered</h4>
        </div>
        <EventCalendar Eventmsg="November" />
      </div>

      <div className="events-images">
        {(showRegisteredEvents ? registeredEvents : allEvents) &&
          (showRegisteredEvents ? registeredEvents : allEvents).map(event => (
            <div className="event-card-contents" key={event.id}>
              <EventImageCard EventMsg="UI/UX " eventIcon={Heart2} EventImage={event.EventPosterURL} />

              <div className="events-page-icon">
                <div className="events-page-icon-head">
                  <h3>{event.EventName}</h3>
                  <p>By Emma Stone</p>
                </div>
                <div className="events-bottom">
                  <EventCalendar Eventmsg="16 Nov,2022" />
                </div>
              </div>
              <div className="center-events-card">
                <div className="events-icons">
                  <EventMembersIcons EventID={event.EventID} />
                </div>
              </div>
              <EventVenue location={event.Location} />
              <div className="register-b">
                <Button msg="Register" onClick={() => handleRegister(event.EventID)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventCard;









