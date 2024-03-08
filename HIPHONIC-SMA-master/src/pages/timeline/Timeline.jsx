//import stylefile
import './Timeline.scss'

// import components
// import Updates from '../../components/timeline/Updates'
import PostContent from '../../components/profile/ProfileStatusPost'
import Addupdate from '../../components/profile/ProfileStatusInput'
import TimelineStatusPostList from '../../components/Timeline/timelineStatusPostList'
import TimelineUpdates from '../../components/Timeline/TimelineUpdates'

const Timeline =() => {
    return (
    <div className="Timeline">
        <div className="TimelineTop">
            <div className="TimelineList">
                <TimelineUpdates />
            </div>
        </div>
        <div className="Addupdate">
            <Addupdate />
        </div>
        <div className="PostContent">
            <TimelineStatusPostList />
        </div>
    </div>
    )
}
export default Timeline;