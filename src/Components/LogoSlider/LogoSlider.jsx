import React from 'react'
import LogoData from './Logo.json'
import './LogoSlider.scss'

function LogoSlider() {
      setInterval(() => {
        const box_width = document.querySelector('.box').clientWidth,
        // box = document.querySelectorAll('.box[logo="show"]'),
        slider = document.querySelector('.slider'),
        slider_inner = document.querySelector('.slider_inner');

        slider.scrollLeft += box_width * 2;
        if (slider.scrollLeft >= slider_inner.clientWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }, 2000);

  return (
    <div className='slider_wrapper y_even'>
        <h1>Our Project Sponsors By :</h1>
          <div className="slider center_left">
            <div className="slider_inner">
                {
                LogoData.map((detail, index)=>{
                  if (index <= 6) {
                    return(
                      <div className="box y_between" key={index} logo="show">
                        <div className="photo_wrapper center_center">
                          <img className='logo' src={`/photos/LogoSlider/${detail.path}`} alt="" />
                        </div>
                        <p className='center_center'>{detail.brand}</p>
                      </div>
                    )
                  }
                  else{
                    return(
                      <div className="box y_between" key={index} logo="hidden">
                          <div className="photo_wrapper center_center">
                            <img className='logo' src={`/photos/LogoSlider/${detail.path}`} alt="" />
                          </div>
                          <p className='center_center'>{detail.brand}</p>
                      </div>
                    )
                  }
                })  
                }
            </div>
          </div>
    </div>
  )
}

export default LogoSlider