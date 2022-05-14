import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function NavBar(props) {
    const navigate = useNavigate()
    const changeURL = (path)=>{
        navigate(path)
    }
    return (
        <div className='navbar'>
            <li onClick={()=>changeURL('/IPhone')}>IPhone</li>
            <li onClick={()=>changeURL('/SamSung')}>SamSung</li>
            <li onClick={()=>changeURL('/Xiaomi')}>Xiaomi</li>
            <li onClick={()=>changeURL('/disconts')}>Disconts</li>
            <li onClick={()=>changeURL('/about')}>About us</li>
        </div>
    );
}

export default NavBar;