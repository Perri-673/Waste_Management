import React from 'react';
import featuresimage from '../images/Frame 19.png'


function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featuresimage} alt='features-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span> is Art</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id eos quo dolores eligendi maxime deserunt cupiditate natus ad recusandae. Perferendis minima pariatur nulla? Cum cupiditate, ut deleniti enim autem architecto minima assumenda ipsa. Necessitatibus inventore nisi labore quo illo.</p>
            <button>View More Features</button>
        </div>
      
    </div>
  )
}

export default Features;
