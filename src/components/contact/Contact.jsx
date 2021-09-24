import React, { useState } from 'react';
import "./contact.scss";


export default function Contact() {

    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <h2>
                    Let's work on that idea!
                </h2>
                <form onSubmit={handleSubmit}  action="mailto:mieseliel.delacruz@gmail.com" method="POST">
                    <input type="text" placeholder="Type your name here" name="name" id="name" required/>
                    <input type="email" placeholder="your_email@mail.com" name="email" id="email" required/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message here" required></textarea>
                    <button type="submit">Send</button>
                </form>
                {message && <span>Thanks, I'll get back to you as soon as possible!</span>}
                <div className="socMed">
                    <a href="https://www.linkedin.com/in/mies-eliel-dela-cruz-06a24716b/" target="_blank" rel="noreferrer">
                        <img src="assets/soc_med/linkedin.png" alt="" />
                    </a>
                    <a href="https://gitlab.com/mieshiii" target="_blank" rel="noreferrer">
                        <img src="assets/soc_med/gitlab.png" alt="" />
                    </a>
                    <a href="https://github.com/mieshiii" target="_blank" rel="noreferrer">
                        <img src="assets/soc_med/github.png" alt="" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~014d6faa05b4accdba?viewMode=1" target="_blank" rel="noreferrer">
                        <img src="assets/soc_med/upwork.png" alt="" />
                    </a>
                    <a href="https://www.facebook.com/mies.of.the.cross/" target="_blank" rel="noreferrer">
                        <img src="assets/soc_med/fb.png" alt="" />
                    </a>
                </div>
                <p>&copy; 2021 Mies Eliel Dela Cruz. All rights reserved</p>
            </div>
            
            <div className="right">
                <img src="assets/handshake.png" alt="Handshake" />
            </div>
        </div>
    )
}
