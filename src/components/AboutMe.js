import React, { useEffect, useRef } from "react";
import '../App.css';
import textAboutMe from "./text.AboutMe";
import Job from "./Job";
import jobsData from "./jobs.data";
import Typed from "typed.js";

export default function About(){

    const jobs = jobsData.map(item => {
        return(
            <Job
                key={item.id}
                item={item}
            />
        )
    })

    const el = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`MySQLdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd`, 'Oracle', 'mongoDB'],
            typeSpeed: 100,
            loop: true,
            backSpeed: 80
        });

        return () => {
            typed.destroy();
        };
    },[]);

    return(
        <div className="aboutMe" id="aboutMe">
            <div className="aboutMeCoding">
                <div className="aboutMeCodigVectors">
                    <img src="./images/node.svg" alt="node.js" className="aboutMeVectorImg"/>
                    <img src="./images/js.svg" alt="js" className="aboutMeVectorImg"/>
                    <img src="./images/mongodb.svg" alt="mongo" className="aboutMeVectorImg"/>
                </div>
                <div className="aboutMeCodingText">{textAboutMe[0]}</div>
            </div>
            <div className="aboutMeCodingTimestamps">
            </div>
            <div className="aboutMeSchool">
                <div className="aboutMeSchoolText">{textAboutMe[1]}</div>
                <div className="aboutMeSchoolContestsVectors">
                    <img src="./images/python.svg" alt="python" className="aboutMeVectorImgSchool"/>
                    <img src="./images/typescript.svg" alt="python" className="aboutMeVectorImgSchool"/>
                    <img src="./images/react.svg" alt="python" className="aboutMeVectorImgSchool"/>
                </div>
            </div>
            <div className="aboutMeFantasy"></div>
            <h1 className='cardsHeader'>My Experience</h1>
            <div className="experience">
            <div className="jobs">{jobs}</div>
            <div className="experienceText">
                <div className="typing">
                <span ref={el} />
                </div>
            </div>
            </div>
            
        </div>
    )
}