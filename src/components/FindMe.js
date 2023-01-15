import React from "react";
import '../App.css';
import Link from "./Link";
import linkData from "./link.data";
import findMeData from "./findme.data";

export default function FindMe(props){

    let text
    let links
    if (props.type == "find") {
        text = "Contact Me On"
        links = linkData.map(item =>{
            return(
                <Link 
                    key={item.key}
                    item={item}
                />
            )
        })
    }else{
        text = "Find Me On"
        links = findMeData.map(item =>{
            return(
                <Link 
                    key={item.key}
                    item={item}
                />
            )
        })
    }

    return (
        <div className="findMeContainer">
            <h4>{text}</h4>
            <div className="links">
                {links}
            </div>
        </div>
    )
}