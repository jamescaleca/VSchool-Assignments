import React from "react"

function PreviewMeme(props){
    return (
        <div>
            <h3>{props.topText}</h3>
            <img src={props.memeUrl} alt={props.name} />
            <h3>{props.bottomText}</h3>
            <br />
            <h4>Add this meme to the list?</h4>
            <button onClick={props.handleSubmit} id="yes">Yes</button>
            <button onClick={props.handleCancel} id="cancel">Cancel</button>
        </div>
    )
}

export default PreviewMeme