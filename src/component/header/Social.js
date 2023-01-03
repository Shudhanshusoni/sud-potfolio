import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Social=()=>{
    return(
        <div className="header_social">
            <a href="https://linkedIn.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
        </div>
    )
}
export default Social;