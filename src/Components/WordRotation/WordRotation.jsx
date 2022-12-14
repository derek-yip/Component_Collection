import React from 'react'
import './WordRotation.scss'
function WordRotation() {
    
    setInterval(()=>{
        const current = document.querySelector('span[text="show"]'),
        next = current.nextElementSibling || document.querySelector('span:first-child'),
        up = document.querySelector('span[text=up]')
        
        if(up){
            up.removeAttribute('text');
        }
        current.setAttribute('text','up');
        next.setAttribute('text','show');
    },2000)

  return (
    <div className='Header_wrapper'>
        <h1>
            How to buy the best 
            <div className="word_container center_center">
                <span text="show">Computer</span>
                <span>Labtop</span>
                <span>Gamepad</span>
                <span>Headphone</span>
            </div>
            in your life? View more in our website..
        </h1>
    </div>
  )
}

export default WordRotation