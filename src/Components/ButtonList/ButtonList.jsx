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

  const EyeMove = (target) =>{
    var eye_x = target.getBoundingClientRect().left,
        eye_y = target.getBoundingClientRect().top

    window.addEventListener('mousemove',(e)=>{
      var x = e.clientX, 
          y = e.clientY,
          multiplier = 0.03,
          location_x = (x - eye_x)* multiplier,
          location_y = (y - eye_y)* multiplier
        
      target.style.transform = `translate(${location_x}%,${location_y}%)`
    })
  }

  const EyeChange = (target) =>{
    const left_eye = target.childNodes[0],
          right_eye = target.childNodes[1],
          original_src = left_eye.src
          left_eye.src = 'http://www.clker.com/cliparts/v/o/h/g/K/J/gold-star-md.png'
          right_eye.src = '/photos/ButtonList/doraemon_eye4.png'
          setTimeout(() => {
            left_eye.src = original_src;
            right_eye.src = original_src;
          }, 1000);
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
        <button id='6' onClick={(e)=>{EyeChange(e.target)}}> 
          <img className='eyes_left' src='/photos/ButtonList/doraemon_eye3.png' alt='' onLoad={(e)=>{EyeMove(e.target)}}/>
          <img className='eyes_right' src='/photos/ButtonList/doraemon_eye3.png' alt='' onLoad={(e)=>{EyeMove(e.target)}}/>
        </button>
        <button id='7'> ClickMe</button>
        <button id='8'> ClickMe</button>
        <button id='9'> ClickMe</button>
    </div>
  )
}

export default ButtonList