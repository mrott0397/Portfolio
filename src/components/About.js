import React from "react";
import profile from "../images/profile.jpg";

export default function About() {
    return (
        <div>
        <div></div>
        <h1 id="about-me">About Morgan</h1>
        
        <div id="about-me-section">
            <div>
                <img src={profile} alt="headshot" className="headshot" />
            </div>

        

            <div id="bio" >
                <p>
                    Originally from Boulder, Co. <br /><br />
                </p>
                <p> 
                    Love of design and creating things started at a young age. <br /><br />
                </p><br />
                <p>
                    Currently enrolled in Denver University's full-stack coding program, Morgan is set to graduate June 12, 2023. She likes seeing small parts come together to create <i>something</i> out of nothing. <br /><br />
                </p>
                <p>
                    Beyond the skills Morgan learned in the bootcamp, she also learned that she really can do anything she sets her mind to and if she doesn't know something, she will learn it. <br /><br />
                </p>
            </div>
            </div>

                <div id="quote">
                    <p id="scarletBegonias">
                        Unless someone like you cares a whole awful lot. <br/>
                        <em>Nothing is going to get better, it's not</em> <br/>
                        -Dr. Seuss, The Lorax <br/><br/>
                    </p>
                </div>

    </div>
    )
}