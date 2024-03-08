import './NavIcon.scss';


const NavIcon=({url,onClick})=>{
    return(
        <img className='img' style={{width:'100%'}} onClick={onClick} src={url} alt="Hiphonic" />
    )
}

export default NavIcon;