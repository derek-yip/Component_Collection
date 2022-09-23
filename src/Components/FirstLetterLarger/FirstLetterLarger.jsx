import React from 'react'
import './FirstLetterLarger.scss'

function FirstLetterLarger(props) {
    const style={
        initalLetter:`${props.intial}`
    }
  return (
    <div className='content_wrapper center_center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quaerat natus maiores. Aut eaque sequi laboriosam quia ab rerum eveniet vero ex obcaecati eius eligendi officia dolorum veritatis impedit error veniam at animi harum libero minus, consequatur saepe ducimus quas! Laboriosam explicabo iure magni nostrum dolorem similique saepe? Quis unde quas impedit corporis perspiciatis sequi, ducimus vitae dolore consequatur, hic quod odit tenetur porro, debitis corrupti! Aut quam hic vero dolor? Eius porro nulla ipsum illum reiciendis delectus quam, odio quasi nisi architecto, dolorem praesentium nobis. Nostrum sapiente assumenda animi et totam laboriosam voluptatem velit, accusantium sequi minima vero expedita.</p>
    </div>
  )
}

export default FirstLetterLarger