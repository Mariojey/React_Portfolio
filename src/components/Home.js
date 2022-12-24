import React from "react";
import '../App.css'

export default function Home(){
    return(
        <div className="homeContainer">
            <div className="homeRightDiv">
                <p>Test</p>
            </div>
            <div className="homeLeftDiv">
                <div id="containerCoffee">
                    <div class="steam" id="steam1"> </div>
                    <div class="steam" id="steam2"> </div>
                    <div class="steam" id="steam3"> </div>
                    <div class="steam" id="steam4"> </div>

                    <div id="cup">
                        <div id="cup-body">
                            <div id="cup-shade"></div>
                        </div>
                        <div id="cup-handle"></div>
                    </div>

                    <div id="saucer"></div>


                    
                </div>
            </div>
        </div>
    )
}