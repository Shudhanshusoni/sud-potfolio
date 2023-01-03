import React from 'react';
import './header.css';
import CTA from './CTA';
import pic from '../../assest/pic.png'
import Social from './Social';

const Header=()=>{
    return(
        <header>
           <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Shudhanshu Soni</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <CTA/>
            <Social/>
            <div className='me'>
                <img src={pic} alt='pic' />
            </div>
            <a href='#contact' className='scroll_down'>Scroll down</a>
           </div>
        </header>
    )
}

export default Header;