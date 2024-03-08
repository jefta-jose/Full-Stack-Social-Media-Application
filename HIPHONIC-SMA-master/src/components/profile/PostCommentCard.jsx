//import assets
import Avatar from "../../assets/Avatar.png"

//stylefile
import './ProfilePostCard.scss';

const ProfileStatusPost = ({comment}) => {

    return (
        <div className="profileStatusPost">
            <div className='postCommentHeader'>
            <div className="profilePic">
                <img src={comment.profileImage} alt="profile" />
            </div>
            <div className="user">
                <p className="username">{comment.Username}</p>
                <p className="postDate">{comment.CommentDate}</p>
            </div>
        </div>
            <div className='profileStatusPostTextContent'>
                <p style={{color:'black'}}>{comment.Content}</p>
            </div>
        </div>
    )
}
export default ProfileStatusPost;
