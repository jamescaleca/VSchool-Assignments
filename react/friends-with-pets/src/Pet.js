import React from "react"

function Pet(props) {
    return(
        <div>
            <h3 style={{color: "cornflowerblue", fontFamily: "Courier New"}}>{props.pet.name} - {props.pet.breed}</h3>
            
            
        </div>
    )
}

export default Pet