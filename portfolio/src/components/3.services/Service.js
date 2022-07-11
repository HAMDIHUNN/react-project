import React from 'react';
import './Service.css'; 
import { FaDatabase,FaOctopusDeploy} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GrHost} from "react-icons/gr";
import {FcServices} from "react-icons/fc";


const Service= () => { 
        return (
< >
<div id="services">
<div className='container services'>
<div className='title-service aos-init aos-animate' data-aos ="fade-up">
                <h2><FcServices size={60} color="blue"/></h2>
                <h2>my services</h2>
                <p className='u-small-text'>WHAT DO I OFFER?</p>
</div>
        <div className='services-content'>
                <div className='services-left aos-init aos-animate' data-aos="fade-right">
                <img src='./delivery.842fda5f239b81c49069.jpeg' alt=''/>
                </div>
<div className='services-right aos-init aos-animate' data-aos="fade-left">
<div className='service'>
        <div className='service-icon'>
        <MdDesignServices size={55} color="blue"/>             
        </div>
        <div className='service-text'>
        <h3>DESIGN</h3>
        <p className='u-text-small'>Never settle to poor design. Take your business to next level with custom designed websites.</p>
        </div>
</div>
<div className='service'>    
        <div className='service-icon'>
        <FaOctopusDeploy size={55}  color="blue"/>
        </div>
        <div className='service-text'>
        <h3>DEPLOYMENT</h3>
        <p className='u-text-small'>Have your website or mobile app professionally built with security, performance and reliability in mind.</p>
        </div>
</div>
<div className='service'>
        <div className='service-icon'>
        <FaDatabase size={55} color="blue"/>
        </div>
        <div className='service-text'>
        <h3>DATABASE</h3>
        <p className='u-text-small'>Have a customized database solution to store your business' data both reliably and securely.</p>
        </div>
</div>
<div className='service'>
        <div className='service-icon'>
        <GrHost size={55} color="blue"/>
        </div>  
        <div className='service-text'>
        <h3>HOSTING</h3>
        <p className='u-text-small'>Have your new website or mobile app hosted on decicated hosting solutions with high security and performance.</p>
        </div>
        </div>
                </div>
                </div>
                </div>
                </div>
</>
        )
}
export default Service;