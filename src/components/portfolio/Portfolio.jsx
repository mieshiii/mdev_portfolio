import React, { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
import {
    fullstack,
    backend,
    frontend
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("fullstack");
    const [data, setData] =  useState([]);
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

    useEffect(() => {
        switch(selected){
            default: setData(fullstack);
            break;

            case "fullstack": setData(fullstack);
            break;

            case "frontend": setData(frontend);
            break;

            case "backend": setData(backend);
            break;
        }
    }, [selected]);

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
                    key={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt="Project" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
