import React from "react";
import '../App.css';
import textAboutMe from "./text.AboutMe";
import Job from "./Job";
import jobsData from "./jobs.data";

export default function About(){

    const jobs = jobsData.map(item => {
        return(
            <Job
                key={item.id}
                item={item}
            />
        )
    })

    return(
        <div className="aboutMe">
            <div className="aboutMeCoding">
                <div className="aboutMeCodigVectors"></div>
                <div className="aboutMeCodingText">{textAboutMe[0]}</div>
            </div>
            <div className="aboutMeCodingTimestamps">
            </div>
            <div className="aboutMeSchool">
                <div className="aboutMeSchoolText">{textAboutMe[1]}</div>
                <div className="aboutMeSchoolContestsVectors"></div>
            </div>
            <div className="aboutMeFantasy"></div>
            <div className="jobs"></div>
        </div>
    )
}