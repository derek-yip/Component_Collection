import React from 'react'
import './ComparsionSlider.scss'
function ComparsionSlider() {
    const SyncValue = (target) =>{
        target.parentNode.style.setProperty('--slide', `${target.value}`)
    }

  return (
    <div className='ComparsionSlider_wrapper center_center' style={{"--slide":'500'}}>
        <div className='ComparsionSlider_inner'>
            <input type="range" min='1' max='1000' defaultValue='500' className='ComparsionSlider' onInput={(e)=>SyncValue(e.target)}/>
        </div>
    </div>
  )
}

export default ComparsionSlider