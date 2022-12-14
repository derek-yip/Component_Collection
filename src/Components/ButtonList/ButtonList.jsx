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
        backgroundChange = './photos/ButtonList/totoro_background.gif';
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
          multiplier = 0.04,
          location_x = (x - eye_x)* multiplier,
          location_y = (y - eye_y)* multiplier
        
      target.style.transform = `translate(${location_x}%,${location_y}%)`
    })
  }

  const EyeChange = (target) =>{
    const left_eye = target.childNodes[0],
          right_eye = target.childNodes[1],
          original_src = left_eye.src
          left_eye.src = './photos/ButtonList/doraemon_eye5.png'
          right_eye.src = './photos/ButtonList/doraemon_eye4.png'
          setTimeout(() => {
            left_eye.src = original_src;
            right_eye.src = original_src;
          }, 1000);
  }



  return (
    <div className="ButtonList">
        <button id='1' className='cover'> <button className='inner'></button></button>
        <button id='2' className='cover'> <button className='inner'></button></button>
        <button className='buttonCover' id='3'>
          <button className='buttonfront' onClick={(e)=>button3(e.target)}> </button>
          <button className='buttonback' onClick={(e)=>button3(e.target)}> </button>
        </button>
        <button id='4' className='center_center'> <div className='inner center_center'></div> </button>
        <button id='5' onClick={(e)=>{GIFchangeBackground(e.target)}}> </button>
        <button id='6' onClick={(e)=>{EyeChange(e.target)}}> 
          <img className='eyes_left' src='./photos/ButtonList/doraemon_eye3.png' alt='' onLoad={(e)=>{EyeMove(e.target)}}/>
          <img className='eyes_right' src='./photos/ButtonList/doraemon_eye3.png' alt='' onLoad={(e)=>{EyeMove(e.target)}}/>
        </button>
    </div>
  )
}

export default ButtonList