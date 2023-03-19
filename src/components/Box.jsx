import React from 'react';

function Box(props) {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.img} alt={props.alte}/>
        </div>
        <div className='s-b-text'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, libero fugit doloremque et a voluptatibus ab rerum saepe similique! Nobis!</p>
            
            <a href='#' className='cv-btn'>{props.button}</a>
            
        </div>
            
      
    </div>
  )
}

export default Box;
