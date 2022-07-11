import {FaHtml5,FaBootstrap,FaAngular,FaReact,FaVuejs,FaJava,FaPhp } from 'react-icons/fa';
import{DiCss3,DiMongodb,DiJavascript1} from 'react-icons/di';
import { SiExpressvpn,SiRubygems,SiTypescript,SiJquery } from "react-icons/si";
import './About.css';


const About = () => {
return (
<div className="content">
    <div id="about" >
        <div>
                <img src='./ham.png' alt='ham' width="200" height="220" />
        </div>
        <div className='about-me'>
            <h1>ABOUT ME</h1>   
            <p>
                    Hard-working and Patient, Full stack web developer having a decent background 
                    in Website development and Engineering with skill set of designing,coding,and 
                    testing Web Applications and creating elegant components in the least amount of
                    time. Developed e-commerce web app, online hotel reservation system  and online
                    Booking engine and other new product features.
            </p>    
        </div>
    </div>
    <h2>SOME OF THE TECHINOLOGY I HAVE BEEN USING</h2>
<div className='slider'>
    <div className='slide-track'>
                <div className='slide'> <FaHtml5 size="60" color="orange" /> </div> 
                <div className='slide'><DiCss3 size="60" color="aqua" /> </div> 
                <div className='slide'><FaBootstrap size="60" color="blue" /> </div> 
                <div className='slide'> <DiJavascript1 size="60" color="green" /> </div> 
                <div className='slide'> <FaReact size="60" color="red" /> </div> 
                <div className='slide'> <FaAngular size="60" color="black" /></div> 
                <div className='slide'> <FaVuejs size="60" color="aqua" /></div> 
                <div className='slide'> <FaJava size="60" color="blue" /></div> 
                <div className='slide'> <FaPhp size="60" color="red " /></div> 
                <div className='slide'> <SiRubygems size="60" color="purple" /></div> 
                <div className='slide'> <SiTypescript size="60" color="red" /></div> 
                <div className='slide'> <SiJquery  size="60" color="orange" /></div> 
                <div className='slide'><DiMongodb  size="60" color="green"/> </div> 
                <div className='slide'><SiExpressvpn size="60" color="blue"/> </div> 
    </div>
</div>
</div>
);
}
export default About;