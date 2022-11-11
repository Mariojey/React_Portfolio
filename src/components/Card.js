import React from "react";
import '../App.css';
import { Icon } from '@iconify/react';

export default function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="cardImage" alt="" />
            <p className="cardTitle">{props.item.title}</p>
            <p className="cardDescription">{props.item.description}</p>
            <div className="cardTechnologies">
                <Icon icon={`bxl:${props.item.technologies.first}`} />
                <Icon icon={`bxl:${props.item.technologies.second}`} />
                <Icon icon={`bxl:${props.item.technologies.third}`} />
            </div>
        </div>
    )
}
/*
<div className="cardTechnologiesItem">{`../images/${props.item.technologies.first}`}</div>
                <div className="cardTechnologiesItem">{`../images/${props.item.technologies.second}`}</div>
                <div className="cardTechnologiesItem">{`../images/${props.item.technologies.third}`}</div>
*/               