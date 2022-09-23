import React from 'react'
import './Lightbox.scss'

function LightBox(props) {

    return(
            <div className="lightbox_wrapper center_center">
                <div className="lightbox center_center">
                    <div className='lightbox_inner center_center'>
                        <button onClick={()=>CloseLightbox()}>X</button>
                        <img className='center_center' src={props.path} alt=""/>
                    </div>
                </div>
            </div>
    )
}
const OpenLightbox=()=>{
    const lightboxWindow= document.querySelector(".lightbox_wrapper");
    const html= document.querySelector("html");
    lightboxWindow.classList.add('lightbox_open');
    html.style.overflow="hidden";
    
}

const CloseLightbox=()=>{
        const lightboxWindow= document.querySelector(".lightbox_wrapper");
        const html= document.querySelector("html");
        lightboxWindow.classList.remove('lightbox_open');
        html.style.overflow="visible";    
}

export {LightBox,OpenLightbox,CloseLightbox};