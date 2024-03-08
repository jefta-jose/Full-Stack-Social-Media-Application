import './Button.scss'

function Button({ btnicon,msg ,onClick}) {
    return (
        <div>
            <button onClick={onClick} className='button'>
               <img src={btnicon} alt="" />
                <span>{msg}</span>
            </button>
        </div>
    )
}

export default Button;