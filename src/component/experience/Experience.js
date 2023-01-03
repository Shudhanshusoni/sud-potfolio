import React from "react";
import "./experience.css";
import {ImHtmlFive2} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {TbBrandJavascript} from 'react-icons/tb';
import {RiReactjsLine} from 'react-icons/ri';
import {DiBootstrap} from 'react-icons/di';
import {FaNode} from 'react-icons/fa';
import {SiExpress} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiMysql} from 'react-icons/si'

const Experience=()=>{
    return(
        <section id="experience"> 
        <h5>My Skill</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
            <div className="experience_frontend">
             <h3>Frontend Development</h3>
             <div className="experience_content">
                <article className="experience_details">
                    <ImHtmlFive2 className="deatail_icon"/>
                    <div>
                    <h4>HTML</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <IoLogoCss3 className="deatail_icon"/>
                    <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <TbBrandJavascript className="deatail_icon"/>
                   <div>
                    <h4>JavaScript</h4>
                    <small className="text-light">Intermediate</small>
                   </div>
                </article>
                <article className="experience_details">
                    <RiReactjsLine className="deatail_icon"/>
                    <div>
                    <h4>React</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <DiBootstrap className="deatail_icon"/>
                   <div>
                    <h4>BootStrap</h4>
                    <small className="text-light">Intermediate</small>
                   </div>
                </article>
             </div>
            </div>

            <div className="experience_backend">
            <h3>Backend Development</h3>
             <div className="experience_content">
                <article className="experience_details">
                    <FaNode className="deatail_icon"/>
                    <div>
                    <h4>Node Js</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <SiExpress className="deatail_icon"/>
                    <div>
                    <h4>Express Js</h4>
                    <small className="text-light">Beginner</small>
                    </div>
                </article>
                <article className="experience_details">
                    <SiMongodb className="deatail_icon"/>
                    <div>
                    <h4>Mongodb</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <SiMysql className="deatail_icon"/>
                    <div>
                    <h4>MySQL</h4>
                    <small className="text-light">Beginner</small>
                    </div>
                </article>
             </div>
            </div>

        </div>
        </section>
    )
}

export default Experience;