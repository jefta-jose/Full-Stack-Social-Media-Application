// import './NavIcon.scss';


const NavIcon=({url,onClick})=>{
    return(
        <img className='img' onClick={onClick} src={url} alt="Hiphonic" />
    )
}

export default NavIcon;