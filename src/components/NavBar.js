import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)
  return <nav>
    <a href="#home" key= "0" >home</a>
    <a href="#about" key= "1" >about </a>
    <a href="#projects" key= "2" >projects</a>
  </nav>;
}

export default NavBar;
