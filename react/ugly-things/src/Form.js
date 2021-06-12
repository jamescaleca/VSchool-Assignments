import React from "react"
import {ThingConsumer} from "./thingContext"
import "./styles.css"

function Form() {
    return (
        <ThingConsumer>
            {context => (
                <form onSubmit={context.handleSubmit}>
                    <input 
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={context.title}
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder="Img URL"
                        type="text"
                        name="imgUrl"
                        value={context.imgUrl}
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={context.description}
                        onChange={context.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Submit"
                        name="submitButton"
                    />
                </form>
            )}
        </ThingConsumer>
    )
}

export default Form