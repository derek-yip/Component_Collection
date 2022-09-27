import React, { useState } from 'react'
import './ComparsionSlider.scss'
function ComparsionSlider() {
    const photo1 = 'https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const photo2 = 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const [value, setValue] = useState(photo1);
    const SyncValue = (target) =>{
        target.parentNode.style.setProperty('--slide', `${target.value}`);

        if (target.value == target.min) {
            setValue(photo1);
        }
        else if (target.value == target.max) {
            setValue(photo2);
        }
        else{
            setValue(photo1);
        }
        
    }
    

  return (
    <div className='ComparsionSlider_wrapper center_center' style={{"--slide":'500', "--background":`url(${value})`}}>
        <div className='ComparsionSlider_inner'>
            <div className='logo_cover'>
                <img className="logo" src="https://www.camping-lescypres85.co.uk/wp-content/uploads/2021/11/cropped-favicon.png" alt="" />
            </div>
            <input type="range" min='1' max='1000' defaultValue='500' className='ComparsionSlider' onInput={(e)=>SyncValue(e.target)}/>
        </div>
    </div>
  )
}

export default ComparsionSlider