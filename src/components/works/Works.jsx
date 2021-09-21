import React, { useState } from 'react';
import "./works.scss";
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          icon: "./assets/MERN.png",
          title: "Budget Tracking App",
          desc:
            "Budget tracking App for personal use. A sample Full-Stack MERN project where database is in MongoDB, back-end is built with Express.js and Node.js as the environment, and React.js as the front-end",
          img:
            "./assets/budgetTracker.jpg",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? (currentSlide-1) : (data.length-1)): setCurrentSlide(currentSlide < (data.length-1) ? (currentSlide+1) : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map((d) =>(
                    <div className="container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="Project icon" />
                                </div>
                                <h2>
                                    {d.title}
                                </h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="Project" />
                        </div>
                    </div>
                </div>))
                }
            </div>
            <ArrowForwardIosRounded className="arrow left" 
            onClick={() => handleClick("left")}
            />
            <ArrowForwardIosRounded className="arrow right"
            onClick={() => handleClick()}
            />
        </div>
    )
}
