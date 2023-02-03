import React from 'react'

function NewsLetter() {
  return (
   <section>
    <div className='main-container-newsletter'>
       <div className='sub-container'>
        <p className='heading-news-1'>Subscribe to Our NewsLetter</p>
        <p className='heading-news-2'>Subscribe to our email & get updates right your inbox </p>
        <input  className='type-news-input' type="text" placeholder='Email Address'/>
        <div className='button-container'>
        <button className='newsletter-btn'>Subscribe Now</button></div>
        <p className='last-heading'>By subscribing, you agree to our policies</p>
       </div>
    </div>
   </section>
  )
}

export default NewsLetter