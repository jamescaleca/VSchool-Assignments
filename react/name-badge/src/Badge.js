import React from "react"

function Badge(props) {
    return (
        <div className="badge">
            <h1>Hello</h1>
            <h1 style={{fontSize: "25px"}}>my name is</h1>
            <div className="information">
                <p>Name: {props.firstName} {props.lastName}</p>
                <p>Phone: {props.phone}</p>
                <p>Place of birth: {props.birthPlace}</p>
                <p>Favorite food: {props.favFood}</p>
                <p>Email: {props.email}</p>
            </div>
            <div id="aboutYou">
                <p>{props.aboutYou}</p>
            </div>
        </div>
    )
}

export default Badge