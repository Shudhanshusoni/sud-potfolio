import React,{useRef} from "react";
import "./contact.css";
import {MdAttachEmail} from 'react-icons/md';
import {TbBrandMessenger} from 'react-icons/tb';
import {ImWhatsapp} from 'react-icons/im';
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_byq67yy', 'template_6jfbxyo', form.current, 'g1S4w-pEfqW3FWwfH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
             
          });
          e.target.reset();
      };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdAttachEmail className="option_icon"/>
                        <h4>Email</h4>
                        <h5>shudhanshusoni880@gmail.com</h5>
                        <a href="mailto:shudhanshusoni880@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <TbBrandMessenger className="option_icon"/>
                        <h4>Messenger</h4>
                        <h5>shudhanshu soni</h5>
                        <a href="https://m.me/shudhanshu.soni.75/" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <ImWhatsapp className="option_icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+917717765408</h5>
                        <a href="https://wa.me/+917717765408" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="your Name" required />
                    <input type="email" name="email" placeholder="your Email" required />
                    <textarea name="message" rows="7" placeholder="your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )  
}

export default Contact;