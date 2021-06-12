import React from "react"
import "./styles.css"
import Form from "./Form"
import {ThingConsumer} from "./thingContext"

function App() {
    return (
        <div>
            <Form />
            <ul>
                <ThingConsumer>
                    {({things}) => (
                        things.map(thing => 
                            <li style={{listStyle: "none"}}>
                                <h2>{thing.title}</h2>
                                <img style={{height: "25%", width: "25%"}}src={thing.imgUrl} alt={thing.title}/>
                                <h4>{thing.description}</h4>
                                <hr/>
                            </li>
                        )
                    )}
                </ThingConsumer>
            </ul>
            
        </div>
    )
}

export default App