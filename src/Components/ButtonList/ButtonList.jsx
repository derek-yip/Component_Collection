import React, { useState } from 'react'
import './ButtonList.scss'
function ButtonList() {

  const [click,setClick] = useState(false);

  const button3=(self)=>{
    setClick(!click);
    self.style.transform = 'rotateY(360deg)';
    if (click) {
      self.style.background = 'lightblue'
    }else{
      self.style.background = 'lightblue'
    }
  }

  return (
    <div className="ButtonList">
        <button id='1' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button id='2' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button id='3' onClick={(e)=>button3(e.target)}> ClickMe</button>
        <button id='4'> ClickMe</button>
        <button id='5'> ClickMe</button>
        <button id='6'> ClickMe</button>
        <button id='7'> ClickMe</button>
        <button id='8'> ClickMe</button>
        <button id='9'> ClickMe</button>
    </div>
  )
}

export default ButtonList