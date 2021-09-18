import React from 'react';
import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Full-Stack</li>
                <li>Back-End</li>
                <li>Front-End</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                <div className="item">
                    <img src="assets/MERN.png" alt="Budget Tracking App" />
                    <h3>Budget Tracking App</h3>
                </div>
                
            </div>
        </div>
    )
}
