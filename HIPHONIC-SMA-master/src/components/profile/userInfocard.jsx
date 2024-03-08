//import stylefile
import './UserInfoCard.scss'

//import assets
import Avatar from '../../assets/Avatar.png'

export const User = () => {
    return (
        <div className='profileStatusPostHeader'>
            <div className="profilePic">
                <img src={Avatar} alt="" />
            </div>
            <div className="user">
                <p className="username">Angela Lee</p>
                <p className="postDate">56 mins agos</p>
            </div>
        </div>
    )
}
export default User;