import React from "react"

function CurrentMeme(props) {
    return (
        <div>
            <img src={props.memeUrl} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default CurrentMeme