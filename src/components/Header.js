import React from "react";
import Nav from "./Nav";
import fullStack from "../images/full-stack.jpg";

function Header() {
    return (
 <header>
    <Nav />
<a href="#about-me">
    <img src={fullStack} alt="Morgan Rott" id="bio-pic" />
</a>
<h1 className="hello"> <br />
   Hey there! Thanks for checking out my work. Excited to create with you! 
</h1>
</header> 
    );
    }

export default Header;