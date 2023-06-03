import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

// this is the contact form that will be used to send me an email when someone wants to reach out to me 
const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = React.useState(false);
// this is the function that will send the email to me 
    const sendEmail = (e) => {
        e.preventDefault();
// this is the emailjs function that will send the email to me 
        emailjs.sendForm('service_qabf0dh', 'template_1k74z5o', form.current, '4-wJ5VK7gWchx8JY5')
        // .then will console log the result of the email being sent
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
            // .catch will console log the error if the email is not sent
            }
            , (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contactDiv">
            <h1 id="contact-me">Reach Out!</h1>
            {emailSent && <p className="emailSent">Email Sent!</p>}
            <form ref={form} onSubmit={sendEmail}>
                <div className="formStuff"><input type="text" name="user_name" placeholder="Name" /> </div>
                <div className="formStuff"><input type="email" name="user_email" placeholder="Email" /></div>
                <div className="formStuff"><textarea name="message" placeholder="Message" /></div>
                <input type="submit" value="Send" id="send-it"/>
            </form>
        </div>
    );
};

export default Contact;