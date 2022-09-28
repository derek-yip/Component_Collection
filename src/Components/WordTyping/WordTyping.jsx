import React, { useEffect } from 'react'
import './WordTyping.scss'
function WordTyping() {
    useEffect(() => {
        const h2 = document.querySelectorAll('h2');
        h2.forEach((h2)=>{
            SplitText(h2);
        })
    }, []);

    setInterval(()=>{
        const current = document.querySelector('h2[text="show"]'),
            next = current.nextElementSibling || document.querySelector('h2:first-child'),
            up = document.querySelector('h2[text=up]')

            const container = document.querySelector('.Word_container');
            var length = next.getAttribute('length');
            container.setAttribute('style', `--length:${length}`);

        if(up){
            up.removeAttribute('text');
        }
        current.setAttribute('text','up');
        next.setAttribute('text','show');
    },4000)

    function SplitText(target) {
        target.innerHTML = target.textContent.replace(/\S/g, "<span className='SplitText'>$&</span>");
        target.setAttribute('length',target.childElementCount);
    }

  return (
    <div className='WordTyping_wrapper'>
        <h1>
            How to buy the best 
            <div className="Word_container">
                <h2 text="show">Computer</h2>
                <h2>Labtop</h2>
                <h2>Gamepad</h2>
                <h2>Headphone</h2>
            </div>
            in your life? View more in our website..
        </h1>
    </div>
  )
}

export default WordTyping