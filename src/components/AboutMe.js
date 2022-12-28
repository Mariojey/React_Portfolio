import React from "react";
import '../App.css';
import textAboutMe from "./text.AboutMe";

export default function About(){


    return(
        <div className="aboutMe">
            <div className="aboutMeCoding">
                <div className="aboutMeCodigVectors"></div>
                <div className="aboutMeCodingText">{textAboutMe[0]}</div>
            </div>
            <div className="aboutMeCodingTimestamps">
            </div>
            <div className="aboutMeSchool">
                <div className="aboutMeSchoolContestsVectors"></div>
                <div className="aboutMeSchoolText"></div>
            </div>
            <div className="aboutMeFantasy"></div>
        </div>
    )
}