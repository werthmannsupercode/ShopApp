import React from 'react';
import './Hero.css';
import hero_image from '../Assets/DSC_0715.JPG';

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="schafe im Abendlicht auf der Weide" />
        </div>
    </div>
  )
}
