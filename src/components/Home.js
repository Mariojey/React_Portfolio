import React from "react";
import '../App.css'

export default function Home(){
    return(
        <div className="homeContainer">
            <div className="homeRightDiv">
                <div className="homeRightDivBanner">
                    <h1> <span>H</span><span>i</span></h1>
                    <h1><span>I</span><span>'</span><span>m</span> <span>M</span><span>a</span><span>r</span><span>i</span><span>o</span><span>J</span><span>e</span><span>y</span></h1>
                    <h1><span>F</span><span>u</span><span>l</span><span>l</span><span>-</span><span>S</span><span>t</span><span>a</span><span>c</span><span>k</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span></h1>
                </div>
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