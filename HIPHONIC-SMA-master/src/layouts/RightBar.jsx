// import styling file
import Contacts from '../components/Contacts';
import Groups from '../components/Groups';
import Shortcuts from '../components/Shortcuts';
import './RightBar.scss'

const RightBar = () => {
    return(
        <div>
            <div className="Shortcuts">
                <Shortcuts/>
            </div>
            <div className="Contacts">
                <Contacts/>
            </div>
            <div className="Groups">
                <Groups/>
            </div>
        </div>
    )
}

export default RightBar;