import React from "react"

function Spot(props) {
    return (
        <div>
            <h1 style={{color: "black"}}>{props.location.place}</h1>
            <p style={{color: "red", textDecoration: "underline"}}>{props.location.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <p>Time to go: {props.location.timeToGo}</p>
            <hr></hr>
        </div>
    )
}

export default Spot