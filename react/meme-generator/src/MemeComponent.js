import React from "react"

function MemeComponent(props) {
    return (
        <div>
            <li>
                <figure>
                    <img 
                        id={props.id}
                        alt={props.name}
                        src={props.url}
                        style={{
                            height: props.height,
                            width: props.width
                        }}
                    />
                </figure>
            </li>
        </div>
    )
}

export default MemeComponent