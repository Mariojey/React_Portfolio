//Add in footer author veernavy from Vecteezy.com graphics to MakeFluent
import React from "react";
import '../App.css';

export default function Footer(props){
    return (
        <footer>
            <div className="footerLeft">
                <nav className="navContentFooter">
                    <ul className="navListFooter">
                            <li className="navItem">
                                <a href="#" className="navLink">{props.home}</a>
                            </li>
                            <li className="navItem">
                                <a href="#sectionOrigin" className="navLink">{props.aboutMe}</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">{props.projects}</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">{props.contact}</a>
                            </li>
                        </ul>
                    </nav>
            </div>
            <div className="footerRight"></div>
        </footer>
    )
}