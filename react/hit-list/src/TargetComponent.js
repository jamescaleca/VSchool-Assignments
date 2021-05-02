import React from "react"

function TargetComponent(props) {
    
    const completedStyle = {
        fontStyle: "italic",
        color: "red",
        textDecoration: "line-through"
    }

    return (
        <div>
            <li>
                <figure>
                    <img 
                        alt={props.name} 
                        src={props.image} 
                        style={{
                            height:"250px", 
                            width: "100%"
                        }}
                    />
                    
                    <figcaption style={{
                        fontSize: "18px", 
                        padding: "20px 10px", 
                        textAlign: "center",
                        backgroundColor: "cornflowerblue"
                    }}>
                        <p style={props.completed ? completedStyle: null}>{props.name}</p>
                        <input 
                            type="checkbox" 
                            style={{marginLeft: "10px"}} 
                            checked={props.completed} 
                            // onChange={props.handleCheck(props.id)}
                        />
                        <br/>
                    </figcaption>
                </figure>
            </li>
        </div>
    )
}

export default TargetComponent