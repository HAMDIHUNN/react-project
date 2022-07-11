/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import { BiCopyright,BiCurrentLocation } from "react-icons/bi";
import { FaHeading,FaPhoneAlt } from "react-icons/fa"; 
import { HiOutlineMail } from "react-icons/hi"; 
import { TbWorld } from "react-icons/tb"; 

const Footer = () => {
    return (
        <div className='footer-box'>
            <div id="footer">
                <div className='footer-link'>
                        <div>
                            <h3>Usefull links</h3>
                        </div>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#services'>Service</a></li>
                            <li><a href='#hobbies'>Hobbies</a></li>
                        </ul>
                    </div>
                <div className='footer-contact'>
                    <div><h3>Contact</h3></div>
                    <p><BiCurrentLocation size={18} color='red' />Address:Addis Ababa ,Ethiopia</p>
                    <p><FaPhoneAlt size={18} color='red'/>Phone:+251912936464</p>
                    <p><HiOutlineMail size={18} color='red' />Email:hamdihun6464@gmail.com</p>
                    <p><TbWorld size={18} color='red'/>Website:www.meethamdihun.com</p>
                </div>
                    <div className='footer-right'>  
                    <span><FaHeading  size={50} color='blue'/></span>
                    <div><p><BiCopyright size={18} color='red'/> Copyright 2022. meethamdihun.com</p></div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;