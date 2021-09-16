import React from 'react';
import "./navbar.scss";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";


export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#landing" className="logo">
                        <img src="../../../public/assets/" alt="Dev Logo" />
                        miesdelacruz
                    </a>
                    <div className="itemContainer">
                        <PhoneIphoneRoundedIcon className="icon"/>
                        <span>+63-916-256-4622</span>
                    </div>
                    <div className="itemContainer">
                        <EmailRoundedIcon className="icon"/>
                        <span>mieseliel.delacruz@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
