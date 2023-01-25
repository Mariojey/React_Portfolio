import React from "react";
import "../App.css";

export default function Navbar(props){
    return(
        <div className="navbarContainer">
            <div className="navLogotyp">
                <p></p>
            </div>
            <div className="navContent">
            <ul className="navList">
                    <li className="navItem">
                        <a href="#home" className="navLink">{props.home}</a>
                    </li>
                    <li className="navItem">
                        <a href="#aboutMe" className="navLink">{props.aboutMe}</a>
                    </li>
                    <li className="navItem">
                        <a href="#cardList" className="navLink">{props.projects}</a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className="navLink">{props.contact}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}