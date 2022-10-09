import React from 'react'
import './ImageSpliter.scss'
function ImageSpliter() {
    function Split (){
        const img = document.querySelector('.ImageSpliter img'),
            splitArea = document.querySelector('.ImageSpliter'),
            Area_Width = splitArea.offsetWidth,
            Area_height = splitArea.offsetHeight,
            splitNum = 3;

            for (let index = 0; index < splitNum; index++) {
                var space = index * Area_Width / splitNum + 'px';
                const pieces = document.createElement('div');
                splitArea.appendChild(pieces);
                pieces.style.left = space;
                pieces.style.top = 0;
                pieces.style.width = Area_Width / splitNum + 'px';
                pieces.style.height = Area_height + 'px';
                pieces.style.backgroundImage = `url(${img.src})`;
                pieces.style.backgroundSize = Area_Width + 'px';
                pieces.style.backgroundPosition = '-' + space
            }

            img.remove()

    }

    window.onload = function(){
        Split();
    }

  return (
    <div className='ImageSpliter'>
        <img src="https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default ImageSpliter