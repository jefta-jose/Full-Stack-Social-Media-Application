import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./ContactList.scss";
import MessageList from "../../components/messages/MessageList";
import { useGetUsersQuery } from "../../features/user/userApi";

const ContactList = ({user}) => {
 

  // const userResponse=users.Users
  return (
    <div>
      
      <section className="user-message-container">
        
            <div>
              <div>
                <img
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                  src={user && user.profileImage}
                  alt="avatar"
                />
              </div>
              <div className="friends-content">
                <h3>{user.Username}</h3>
              </div>
            </div>
        
      </section>
    </div>
  );
};

export default ContactList;
