import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../Navbar/Navbar";
import Banner from '../Banner/banner';



import "./Contacto.css";

const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jywd8tw', 'template_9xcqc49', form.current, '3fvNvsm6_YiNvDt4F')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
        <Navbar />
        <Banner />

        <form ref={form} onSubmit={sendEmail} className='field'>
            <label>NOMBRE</label>
            <input type="text" name="user_name" />
            <label>EMAIL</label>
            <input type="email" name="user_email" />
            <label>MENSAJE</label>
            <textarea name="message" />
            <input type="submit" value="SEND" />
        </form>
        </>
    );

};
export default Contacto;
