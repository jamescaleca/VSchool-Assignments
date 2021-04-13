import React from "react"
import Navbar from "./Navbar"
import background from "./home-bg.jpeg"


function Header() {
    const navbar = <Navbar />
    return(
        <div style={{
            backgroundImage: `url(${background})`, 
            WebkitBackgroundSize: "cover",
            padding: "0",
            height: "500px",
            width: "100%",
            background: "no repeat center center",
            backgroundSize: "cover",
            position: "relative",
            }}>
            {navbar}
            <header className="masthead">
                <div className="overlay" style={{
                        position: "absolute", 
                        backgroundColor: "#212529", 
                        top: "0", 
                        left: "0", 
                        height: "100%", 
                        width: "100%", 
                        opacity: ".2"
                    }}>
                    </div>
                <div className="container" style={{textAlign: "center", color: "white"}}>
                    <h1 style={{fontSize: "80px", fontWeight: "800"}}>Clean Blog</h1>
                    <span className="subheading" style={{fontSize: "24px", fontWeight: "300", lineHeight: "1.1"}}>A Blog Theme by Start Bootstrap</span>
                </div>
            </header>
        </div>
    )
}

export default Header