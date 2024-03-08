import React from 'react'

function ActivityPoster({url,onClick}) {
    return(
        <img className='img' style={{width:'30px',height:'30px',borderRadius:'50%'}} onClick={onClick} src={url} alt="Hiphonic" />
    )
}

export default ActivityPoster
