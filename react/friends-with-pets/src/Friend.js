import React from "react"
import Pet from "./Pet"


function Friend(props) {
    const petsData = props.pets.map(pet => <Pet key={pet.id} pet={pet} />)    

    return(
        <div>
            <h1 style={{color: "midnightblue"}}>{props.friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <div style={{paddingLeft: "30px", border: "solid black"}}>
                <h2>Pets: </h2>
                {petsData}
            </div>
            <hr></hr>
        </div>
    )
}

export default Friend