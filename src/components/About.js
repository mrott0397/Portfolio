import React from "react";
// import profile from "../src/images/profile.jpg";

export default function About() {
    return (
        <div className="container">
            <div className="row" id="About-Me">
                <div className="col-md-6">
                    <h2>About Me</h2>
                    <div>
                        <br/>
                        <p>Welcome to my portfolio page! My name is Morgan and I am brand new to coding. I love putting pieces together to create something bigger, this is a huge reason why I chose a career in coding.
                        </p>
                        <br/>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={require("../src/images/profile.jpg").default} alt="profile" className="img-fluid" />
                        </div>

                </div>

            </div>
        </div>
    )
}