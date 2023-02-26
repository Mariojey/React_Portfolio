import React from "react";
import '../App.css';
import { Icon } from "@iconify/react";

export default function Job(props){
    return(
     <div className="job">
        <img src={`./images/${props.item.coverImg}`} className="jobImg" alt = "" />
        <div className="jobWrap">
            <div className="jobContent">
                <div className="jobDetails">
                    <p className="jobName">{props.item.name}</p>
                    <p className="jobWorkplace">{props.item.workplace}</p>
                </div>
                <div className="jobTime">
                    <p className="jobBegin">{props.item.begin}</p>
                    <p className="jobEnd">{props.item.end}</p>
                </div>
            </div>
            <div className="jobTechnologies">
                <Icon icon={`bxl:${props.item.technologies.first}`} className="jobTechnologiesItem" />
                <Icon icon={`bxl:${props.item.technologies.second}`} className="jobTechnologiesItem" />
                <Icon icon={`bxl:${props.item.technologies.third}`} className="jobTechnologiesItem"/>
            </div>
        </div>
     </div>
    )
}