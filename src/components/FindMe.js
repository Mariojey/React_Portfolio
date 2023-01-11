import React from "react";
import '../App.css';
import Link from "./Link";
import linkData from "./link.data";

export default function FindMe(){

    const links = linkData.map(item =>{
        return(
            <Link 
                key={item.key}
                item={item}
            />
        )
    })

    return (
        <div className="findMeContainer">
            <div className="links">
                {links}
            </div>
        </div>
    )
}