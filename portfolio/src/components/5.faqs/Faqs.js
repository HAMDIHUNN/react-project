import { useState } from 'react';
import './Faqs.css';
import { HiOutlineDocumentText  } from "react-icons/hi";

        function Faqs() {
        const [selected,setSelected]=useState(null)
        const toggle=(i)=>{
                if(selected===i){
                return setSelected(null)
                }
                setSelected(i)
                }
                return (
        <div className="wrapper-content">
        <div className='Accordion'>
                        <h2> <HiOutlineDocumentText size={40} color='red'/></h2> 
                        <h2>FAQs</h2>
                        <p className='header-faqs'>Find answer to your questions</p>
                {Data.map((item)=>(
        <div className='item-list' key={item.question}>
        <div className='title-accordion'>
                <h4>{item.question}</h4>
                <span onClick={()=>toggle(item.answer)}>{selected===item.answer? '-':'+'}</span>
        </div>
        <div 
                className={selected===item.answer? 'contentA show': 'contentA'}>          
                <p>{item.answer}</p>
        </div>
        </div>
                ))}
        </div>
        </div>
        );
        } 
        const Data =[
        {question:'DO I HAVE TO BE LOCAL TO WORK WITH YOU?',
        answer:'Nope! We work with clients all over the world. Our whole team works remotely, allowing us to find the absolute best team for our business.'},
        {question:'WILL YOU MAINTAIN MY SITE FOR ME?',
        answer:'We can! We provide on-going support for many of our clients'},
        {question:'WILL MY WEBSITE BE MOBILE FRIENDLY?',
        answer:'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.'},
        {question:'HOW MUCH INPUT DO I HAVE IN THE PROCESS?',
        answer:'A lot! Your input and feedback is crucial to this process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality.'}
        ]
        export default Faqs;
        