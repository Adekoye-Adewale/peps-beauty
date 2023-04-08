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
                        <a href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F2349132243598&e=AT29FoEirjsZlAZLECXYYV-ugg_grZuVnBF0ujCYp1GxbQWT2_3AGQ2ieu9yJMWxG75YX-2BHDsCL9p9mkT8LVUmJmqH6m03ZeQMaQ' target='_blank'>
                            Book Free Consultation
                        </a>
                    </div>
                    <div>
                        <a href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F2349132243598&e=AT29FoEirjsZlAZLECXYYV-ugg_grZuVnBF0ujCYp1GxbQWT2_3AGQ2ieu9yJMWxG75YX-2BHDsCL9p9mkT8LVUmJmqH6m03ZeQMaQ' target='_blank'>
                            Buy Products Now
                        </a>
                    </div>
                    <div>
                        <a href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F2349132243598&e=AT29FoEirjsZlAZLECXYYV-ugg_grZuVnBF0ujCYp1GxbQWT2_3AGQ2ieu9yJMWxG75YX-2BHDsCL9p9mkT8LVUmJmqH6m03ZeQMaQ' target='_blank'>
                            Message Us On WhatsApp Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
