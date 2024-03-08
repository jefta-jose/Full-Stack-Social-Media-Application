import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment(''); 
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="comment" 
        placeholder="Add a comment..." 
        value={comment} 
        onChange={handleChange} 
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentForm;
