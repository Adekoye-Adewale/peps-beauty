import React from 'react'
import "./Content.css"
import logo from '../logo.svg';

export default function Content() {
  return (
    <>
        <div className='content'>
            <div className='content-wrapper'>
                <img src={logo} alt='Peps organics logo' />
                <h1>peps beauty products</h1>
                <p>6yrs+ of restoring #skinfidence & promoting healthy skin with safe nature-derived products that truly work.</p>
                <div className='btn'>
                    <div>
                        <a href='https://wa.me/2349132243598' target='_blank' rel="noreferrer">
                            Book Free Consultation
                        </a>
                    </div>
                    <div>
                        <a href='https://wa.me/2349132243598' target='_blank' rel="noreferrer">
                            Buy Products Now
                        </a>
                    </div>
                    <div>
                        <a href='https://wa.me/2349132243598' target='_blank' rel="noreferrer">
                            Message Us On WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
