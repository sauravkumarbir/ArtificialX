import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
   <>
    <div class="container">
  <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
  <div class="input-wrapper">
    <input type="email" placeholder="Email Address" />
    <button className='contact-btn'>Get Started <span class="arrow-symbol">&gt;</span></button>
  </div>
</div>
   </>
  )
}

export default Contact