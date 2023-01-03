import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer=()=>{
    return(
        <footer>
        <a href="#" className='footer_logo'>Shudhanshu Soni</a>

        <ul className='permlinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer_social'>
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://instagram.com"><AiFillInstagram /></a>
            <a href="https://twitter.com"><AiFillTwitterCircle /></a>
        </div>
        <div className='footer_copyright'>
            <small>&copy; Shudhanshu Soni</small>
        </div>
        </footer>
    )
}

export default Footer;