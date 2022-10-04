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

  const GIFchangeBackground = (target) =>{
    const backgroundOriginal = target.style.background,
        backgroundChange = 'https://media3.giphy.com/media/Zgvj4OxTtCSxG/giphy.gif?cid=ecf05e47nvordo00joejrwaj0u6e05cyydhesx51ne308t9z&rid=giphy.gif&ct=g';
    target.style.background = `url(${backgroundChange})`;
    setTimeout(() => {
      target.style.background = backgroundOriginal;
    }, 3500);
  }

  return (
    <div className="ButtonList">
        <button id='1' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button id='2' className='cover'> ClickMe <button className='inner'>ClickMe</button></button>
        <button className='buttonCover' id='3'>
          <button className='buttonfront' onClick={(e)=>button3(e.target)}> ClickMe</button>
          <button className='buttonback' onClick={(e)=>button3(e.target)}>ClickMe</button>
        </button>
        <button id='4' className='center_center'> <div className='inner center_center'>ClickMe</div> </button>
        <button id='5' onClick={(e)=>{GIFchangeBackground(e.target)}}> ClickMe</button>
        <button id='6'> ClickMe</button>
        <button id='7'> ClickMe</button>
        <button id='8'> ClickMe</button>
        <button id='9'> ClickMe</button>
    </div>
  )
}

export default ButtonList