import React, { useState } from 'react'
import './ComparsionSlider.scss'
function ComparsionSlider(props) {
    const [value, setValue] = useState(props.photo1);
    const SyncValue = (target) =>{
        target.parentNode.style.setProperty('--slide', `${target.value}`);

        if (target.value === target.min) {
            setValue(props.photo1);
        }
        else if (target.value === target.max) {
            setValue(props.photo2);
        }
        else{
            return
        }
    }
    

  return (
    <div className='ComparsionSlider_wrapper center_center' style={{"--slide":'500', "--background":`url(${value})`}}>
        <div className='ComparsionSlider_inner'>
            <div className='logo_cover'>
                <img className="logo" src={props.logo} alt="" />
            </div>
            <input type="range" min='1' max='1000' defaultValue='500' className='ComparsionSlider' onInput={(e)=>SyncValue(e.target)}/>
        </div>
    </div>
  )
}

export default ComparsionSlider