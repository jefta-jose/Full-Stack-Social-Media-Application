import React, { useState } from 'react';
import MessageList from '../../components/messages/MessageList';
import Input from '../../components/messages/Input';

import './Messages.scss'
import ContactList from './ContactList';
import { useGetUsersQuery } from '../../features/user/userApi';

const Messages = () => {
  const {
    data: users,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetUsersQuery();
    
      return (
        <div className='main-message-container'>
          {isError && <div>Error: {error.data}</div>}
      {isLoading ||
        (isFetching && <ClipLoader color="#000" loading={true} size={150} />)}  
        <div className="contacts-contents">
        <div className="suggested-contacts-title"><h2> Contacts</h2></div>
        {users &&
          users.map((user) => (
          <ContactList key={user.UserID} user={user}/>
          ))}
        </div>
          <div className="message-contents">
          <h2>Message</h2>  
          <div className="chat-container">
          
            <ul className="chat">
              <li className="message left">
                <img className="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                <p>I'm hungry!</p>
              </li>
              <li className="message right">
                <img className="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                <p>Hi hungry, nice to meet you. I'm Dad.</p>
              </li>
              <li className="message left">
                <img className="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                <p>DAD! I'm serious!</p>
              </li>
              <li className="message right">
                <img className="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                <p>I thought your name was hungry...?</p>
              </li>
              <li className="message left">
                <img className="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                <p>ARE YOU KIDDING ME?</p>
              </li>
              <li className="message right">
                <img className="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
                <p>No, I'm Dad...</p>
              </li>
            </ul>
            <input type="text" className="text_input" placeholder="Message..." />
          </div>
          </div>
        </div>
      );
}

export default Messages;


