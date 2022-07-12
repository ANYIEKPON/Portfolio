import React, { useRef } from 'react';
import '../styles/Contact.css';
import { MailOutline, WhatsApp } from '@mui/icons-material';
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gw7cszn', 'template_ny8b9xc', form.current, 'CM4unopPUph0OedYf')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

  return (
    <div className='contact_form'>
        <div className='contact_text'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
        </div>
        <div className='contact_container'>
            <div className='contact_options'>
                <article className='contact_option'>
                    <MailOutline />
                    <h4>Email</h4>
                    <h5>anibros88@gmail.com</h5>
                    <a href="mailto:anibros88@gmail.com"><button className='b'>Send a Message</button></a>
                </article>
                <article className='contact_option'>
                    <WhatsApp />
                    <h4>WhatsApp</h4>
                    <h5></h5>
                    <a href="https://api.whatsapp.com/message/EXMFRSULQRSTA1?autoload=1&app_absent=0" target='_blank'><button className='b'>Send a Message</button></a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your FullName' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
                <button type='submit' className='btn-primary' >Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default Contact;