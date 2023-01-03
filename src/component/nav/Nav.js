import React from "react";
import './nav.css'; 
import { useState } from "react";
import {BiHomeAlt} from 'react-icons/bi';
import {CiUser} from 'react-icons/ci';
import {BsJournalBookmark} from 'react-icons/bs';
import {MdOutlineContactMail} from 'react-icons/md';


const Nav=()=>{
  const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
       <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#'?'active':''} ><BiHomeAlt/></a>
       <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav ==='#about'?'active':''} ><CiUser/></a>
       <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience'?'active':''} ><BsJournalBookmark/></a>
       <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact'?'active':''} ><MdOutlineContactMail/></a>
    </nav>
  )
 
}

export default Nav;