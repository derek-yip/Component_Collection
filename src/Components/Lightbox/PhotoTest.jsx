import React, { useState } from 'react'
import { LightBox, OpenLightbox} from './Lightbox'
function PhotoTest() {
    const style={
        width:'100vw',
        height:'100%',
    }

    const photostyle={
      cursor:'pointer',
      width:'calc(100%/4)'
    }

    const [Image,setImage]=useState();
    
    const launch_lightbox=(e)=>{
        setImage(e.target.src);
        OpenLightbox();
    }

  return (
    <div className='x_even' style={style}>
        <img style={photostyle} src="https://images.pexels.com/photos/13727430/pexels-photo-13727430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" onClick={launch_lightbox}/>
        <img style={photostyle} src="https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" onClick={launch_lightbox}/>
        <img style={photostyle} src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" onClick={launch_lightbox}/>

        <LightBox path={Image}/>
    </div>
  )
}

export default PhotoTest