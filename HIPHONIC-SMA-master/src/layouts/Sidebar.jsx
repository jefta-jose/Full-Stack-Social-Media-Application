//Styling file
import './Sidebar.scss'
import SideProfile from '../components/SideProfile'
import SideMenu from '../components/SideMenu'
import Shortcuts from '../components/Shortcuts'
//import layouts

const Sidebar = () => {
    return(
    <div>
       <div className="SideProfile">
        <SideProfile />
       </div>
       <div className='SideMenu'>
        <SideMenu/>
       </div>
       <div className="Shortcuts">
        <Shortcuts/>
       </div>
    </div>
    )
}
export default Sidebar