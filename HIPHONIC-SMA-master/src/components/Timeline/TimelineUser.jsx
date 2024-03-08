//import stylefile
import './TimelineUser.scss'

//import assets
import Avatar from '../../assets/Avatar.png'

export const TimelineUser = () => {
    return (
        <div className='profileStatusPostHeader'>
            <div className="profilePic">
                <img src={Avatar} alt="" />
            </div>
            <div className="user">
                <p className="username">User</p>
                <p className="postDate">56 mins agos</p>
            </div>
        </div>
    )
}

export default TimelineUser;