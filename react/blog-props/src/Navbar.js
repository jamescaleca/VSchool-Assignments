import React from "react"


function Navbar() {
    return(
        <div style={{display: "inline-block", fontSize: "1.25rem", fontWeight: "800", color: "#fff"}}>
            <a className="navbar-brand" href="html" style={{
                    color: "white", 
                    fontSize: "30px", 
                    textDecoration: "none", 
                    padding: "0px 0px 0px 50px"
                }}>
                Start Bootstrap</a>
            <div className="navbar-collapse" style={{textTransform: "uppercase", display: "inline-block"}}>
                <ul className="navbar-right" style={{display: "flex", marginLeft: "800px"}}>
                    <li className="navItem" style={{display: "inline-block", padding: "10px 20px"}}>
                        <a className="navLink" href="index.html" style={{textDecoration: "none", color: "white"}}>Home</a>
                    </li>
                    <li className="navItem" style={{display: "inline-block", padding: "10px 20px"}}>
                        <a className="navLink" href="about.html" style={{textDecoration: "none", color: "white"}}>About</a>
                    </li>
                    <li className="navItem" style={{display: "inline-block", padding: "10px 20px"}}>
                        <a className="navLink" href="post.html" style={{textDecoration: "none", color: "white"}}>Sample Post</a>
                    </li>
                    <li className="navItem" style={{display: "inline-block", padding: "10px 20px"}}>
                        <a className="navLink" href="contact.html" style={{textDecoration: "none", color: "white"}}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar