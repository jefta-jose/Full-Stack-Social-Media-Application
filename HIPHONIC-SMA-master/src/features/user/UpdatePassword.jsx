import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

import '../../App.css'
import { useUpdateTitlePostMutation } from './postApis';


const UpdateTitle = ({ post, closeModal }) => {
    const [updatePost] = useUpdateTitlePostMutation();

    const [title, setTitle] = useState(post ? post.title : '');
  
  
  
    const handleUpdate = (e) => {
      e.preventDefault();
      updatePost({ title: title,id:post.id});
      closeModal();
    };
  
    const handleClose=()=>{
      closeModal();
  
    }
    return (
      <section className="modal-card">
        <div className="close">
        <MdOutlineCancel className="close-icon"  onClick={handleClose}/>
        </div>
        <h2>Update Your Post</h2>
        
        <form className="form" onSubmit={handleUpdate}>
          <label className="form-input" htmlFor="updatePostTitle">
            Title:
            <input type="text"  value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </label>
          <button type="submit">Update Post</button>
        </form>
      </section>
    );
}

export default UpdateTitle
