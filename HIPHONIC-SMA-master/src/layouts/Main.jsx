//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';
import Videos from '../pages/videos/Videos'
import Timeline from '../pages/timeline/Timeline'
import Photos from '../pages/photos/photos'
import Event from '../pages/events/Events';


import { Route, Routes } from 'react-router-dom';

//Importing layouts
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightBar from './RightBar';
import Groups from '../pages/groups/Groups';
import FriendsPage from '../pages/friends/FriendsPage';
import Messages from '../pages/messages/Messages';
import SingleGroup from '../pages/SingleGroup/SingleGroup';
import { useEffect, useState } from 'react';
import LoadingApp from '../components/loading/LoadingApp';
import ProgressBar from '../components/loading/ProgressBar';

const mainContent = () => {
const[isLoading,setIsLoading]=useState(true)
const [progress,setProgress]=useState(0)

useEffect(()=>{

const handleLoading=()=>{
setTimeout(()=>{
  setIsLoading(false)
  setProgress(100)
},2000)

};
handleLoading()
},[])


    return (
    <div>
      { isLoading ? (
        <div>
        <LoadingApp />
        <ProgressBar progress={progress} />
       </div>
      ) : (
        <div className='mainContainer'>
        <div className="navbar">
            <Navbar />
        </div>
          <div className="mainBottom">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="mainPageContent">
           <Routes>
         <Route path='/profile' element={ <Profile />}/>
         <Route path='/timeline' element={ <Timeline />}/>
         <Route path='/videos' element={ <Videos />}/>
         <Route path='/groups' element={ <Groups />}/>
         <Route path='/friends' element={ <FriendsPage />}/>
         <Route path='/photos' element={ <Photos />}/>
         <Route path='/events' element={<Event/>}/>
         <Route path='/messages' element={<Messages/>}/>
         <Route path='/Single/:GroupID' element={<SingleGroup/>}/>
   
           </Routes>
           </div>
             <div className="rightBar">
              < RightBar/>
            </div>
           </div>
       </div>
  
      )

      }
    </div>
      

    );
}

export default mainContent