import React from 'react'
import './ComparsionSlider.scss'
function ComparsionSlider() {
    const SyncValue = (target) =>{
        target.parentNode.style.setProperty('--slide', `${target.value}`)
    }

  return (
    <div className='ComparsionSlider_wrapper center_center' style={{"--slide":'500'}}>
        <div className='ComparsionSlider_inner'>
            <div className='logo_cover'>
                <img className="logo" src="https://www.nicepng.com/png/full/162-1628487_plumeria-flower-logo-vector-png-frangipani-logo.png" alt="" />
            </div>
            <input type="range" min='1' max='1000' defaultValue='500' className='ComparsionSlider' onInput={(e)=>SyncValue(e.target)}/>
        </div>
    </div>
  )
}

export default ComparsionSlider