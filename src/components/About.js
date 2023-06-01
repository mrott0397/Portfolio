import React from "react";
import profile from "../images/profile.jpg";

export default function About() {
    return (
        <div className="container">
            <div className="row" id="About-Me">
                <div className="col-md-9">
                    <div className="d-flex">
                        <br />
                        <br />
                        <h2>About Me</h2>
                        <img src={profile} style={{ width: "250px" }} style1={{ height: "200px" }} className="img-fluid" alt="profile" />
                        <br />
                        <p>Welcome to my portfolio page! My name is Morgan and I am brand new to coding. I love putting pieces together to create something bigger, this is a huge reason why I chose a career in coding.
                        </p>
                        <br />
                    </div>
                    {/* <div className="col d-flex justify-content-center">
                        <img src={profile} className="img-fluid" alt="profile"/>
                        </div> */}

                </div>

            </div>
        </div>
    )
}