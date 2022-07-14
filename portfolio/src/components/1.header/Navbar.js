import React ,{ Component } from 'react';
import './Navbar.css';
import { FaReact } from "react-icons/fa";
import {  SiUpwork } from "react-icons/si";

const MenuItems = [
    {
        title:'Home',
        url:'#',
        cName:'nav-links'
    },

    {
        title:'About-Me',
        url:'#about',
        cName:'nav-links'
    },

    {
        title:'My-Services',
        url:'#services',
        cName:'nav-links'
    },

    {
        title:'Hobbies',
        url:'#hobbies',
        cName:'nav-links'
    },
]
class Navbar extends Component{ 
            state = { clicked:false }
            handleClick=()=>{
                this.setState({clicked : !this.state
            .clicked})
    }
    render(){
        return(
            <div className='cover'>



                    <nav className='NavbarItems'>
                    <h1
                        className='navbar-logo'> Hamdihun 
                    </h1>
                    <div className="menu-icon" onClick={this.handleClick} >
                        <i className={this.state
                        .clicked ?'fas fa-times' :
                        'fas fa-bars'} ></i> 
                    </div>                          
                    <ul  className= {this.state
                    .clicked ? 'nav-menu active':
                    'nav-menu'}>
                    { MenuItems.map((item,index)=> {
                        return (
                                <li key={index}>
                                        <a className={item.cName} href={item.url}>
                                        {item.title}                 
                                        </a>   
                                </li>   
                        )
                        })}
                        <button className='btn'><a href='#footer' >Contact</a></button>  
                        </ul>
                </nav>
            


            <div className='header-summary'>
                <div className='right'>
                    <div><h1>WEB DEVELOPER</h1></div>
                    <div><p>attracts the right and guides the main </p></div>
                </div>
                <div className='left'>
                            <FaReact color='red' size={100}/>
                            <SiUpwork  color='green' size={100}/>
                            
                </div>
            </div>

                </div>
        )
    }
    } 
export default Navbar;
