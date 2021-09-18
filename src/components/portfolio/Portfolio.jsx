import React, { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("fullstack");
    const list = [
        {
            id: "fullstack",
            title: "Full-Stack"
        },
        {
            id: "backend",
            title: "Back-End"
        },
        {
            id: "frontend",
            title: "Front-End"
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
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
