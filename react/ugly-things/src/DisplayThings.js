import React from "react"
import {ThingConsumer} from "./thingContext"
import "./styles.css"

function DisplayThings() {
    return(
        <ThingConsumer>
            {context => (
                context.things.map(thing => 
                    <li style={{listStyle: "none"}}>
                        <h2>{thing.title}</h2>
                        <img 
                            style={{height: "25%", width: "25%"}}
                            src={thing.imgUrl} 
                            alt={thing.title}
                        />
                        <h4>{thing.description}</h4>
                        <button onClick={() => context.handleDelete(thing._id)}>Delete</button>
                        <button onClick={() => context.editThing(thing._id)}>Edit</button>
                        <hr/>
                    </li>
                )
            )}
        </ThingConsumer>
    )
}

export default DisplayThings