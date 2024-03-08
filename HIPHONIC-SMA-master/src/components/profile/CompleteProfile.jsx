//stylefile
import './CompleteProfile.scss'

const completeProfile = () => {
    return (
        <div className="complete-profile">
          <div>Complete Your Profile</div>
          <div className="scale">
            <progress value={80} max={100} className='progress'></progress>
            <p>80%</p>
          </div>
        </div>
    );
}
export default completeProfile;