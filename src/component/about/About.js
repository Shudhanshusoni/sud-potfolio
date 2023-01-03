import React from 'react';
import './about.css';
import about from '../../assest/about.gif';
import {FaAward} from 'react-icons/fa';
import {GiOpenFolder} from 'react-icons/gi';

const About=()=>{
    return(
    <section id="about">
     <h5>Get TO Know</h5>
     <h2>About Me </h2>

     <div className='container about_container'>
        <div className='about_me'>
          <div className='about_image'>
            <img src={about} alt='about image'/>
          </div>
        </div>
        <div className='about_content'>
            <div className='about_cards'>
                <article className='about_card '>
                  <FaAward className='about_icon'/>
                  <h5>Experience</h5> 
                  <small>1 year intern work</small> 
                </article>

                <article className='about_card '>
                  <GiOpenFolder className='about_icon'/>
                  <h5>Projects</h5> 
                  <small>10+</small> 
                </article>
            </div>
            <p>
            Initially, I learned HTML and CSS, followed by JavaScript. I currently use ReactJS on the frontend and NodeJS on the backend. On the database side, I am familiar with MySQL for relational databases and MongoDB for non-relational databases.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
     </div>
    </section>
 )
}
export default About;