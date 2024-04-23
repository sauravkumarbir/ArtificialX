import React from 'react';
import "./Home.css";

export const Home = () => {
  return (
    <>

      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h3>ARTIFICIAL INTELLIGENCE</h3>
            <div className="part1-image">

              <dotlottie-player src="https://lottie.host/5c52e609-d31c-4910-8130-f096009fb38e/qAv3XFWXO3.json" background="transparent" speed="1" loop autoplay></dotlottie-player></div>
          </div>

          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            
            <div className="paert2-image">
   
             <dotlottie-player src="https://lottie.host/652654e0-f050-4de9-8e32-88af5f39bf16/4wxu9NGVKr.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
