import React, { useEffect, useRef } from 'react';
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';
import "./landing.scss";
import { init } from "ityped";

export default function Landing() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1000,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            strings: ['Web Development', 'Web Design', 'React.js', 'Bootstrap', 'HTML/S-CSS', 'Express.js', 'Node.js', 'WordPress'] 
        })
    }, [])

    return (
        <div className="landing" id="landing">
            <div className="left">
                <div className="wrapper">
                    <h3>I'm Mies</h3>
                    <p>and I love working with</p>
                    <br />
                    <span ref={textRef}></span>
                </div>
               
            </div>
            <div className="center">
                <div className="wrapper">
                    I’ve been very interested with technology since I was a kid, I loved tinkering and rebuilding stuff. I’ve built my own pc at the age of 14 and since then I’ve never stopped learning, be it developing new skills or discovering historic technology and everything else that I find interesting.
                </div>
                <a href="#portfolio">
                    <ArrowForwardIosRounded className="icon"/>
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/dev_img2.jpg" alt="Dev"/>
                </div>
            </div>
        </div>
    )
}
