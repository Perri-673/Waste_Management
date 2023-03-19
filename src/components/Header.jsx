import React from 'react';
import Navbar from './Navbar';
function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1>It's a <span>Waste</span> Management Website</h1>
            <p className='details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores magnam sunt fugiat provident vel dolor modi quibusdam ut deleniti totam!</p>
            <div className='header-btns'>
                <a href='#' className='cv-btn'>Profile</a>
                <a href='#' className='cv-btn1'>Download App</a>
            </div>
        </div>
        <div className='arrow'></div>
      
    </div>
  )
}

export default Header
