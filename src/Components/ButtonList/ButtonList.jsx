import React, { useState } from 'react'
import './ButtonList.scss'
function ButtonList() {

  const [click,setClick] = useState(false);

  const button3=(self)=>{
    const front= document.querySelector('.buttonfront'),
          back= document.querySelector('.buttonback')
    setClick(!click);
    if (click) {
      front.style.transform = 'rotateY(0)';
      back.style.transform = 'rotateY(180deg)';
    }else{
      front.style.transform = 'rotateY(180deg)';
      back.style.transform = 'rotateY(0deg)';
    }
  }

  return (
    <div className="ButtonList">
        <button id='1' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button id='2' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button className='buttonCover' id='3'>
          <button className='buttonfront' onClick={(e)=>button3(e.target)}> ClickMe</button>
          <button className='buttonback' onClick={(e)=>button3(e.target)}>ClickMe</button>
        </button>
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