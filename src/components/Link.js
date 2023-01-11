import React from "react";
import '../App.css';

export default function Link(props){
    return(
        <a className="linkContainer" href={props.item.link} target="_blank" background-color={props.item.theme}>
            <div className="linkImg">
                <img src={`../images/${props.item.img}`} alt="img" />
            </div>
            <div className="linkContent">
                <p className="linkPortal">{props.item.portal}</p>
                <p className="linkName">{props.item.name}</p>
            </div>
        </a>
    )
}