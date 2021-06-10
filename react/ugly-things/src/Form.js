import React, {Component} from "react"
import {ThingConsumer} from "./thingContext"

function Form(props) {
    return (
        <ThingConsumer>
            {context => (
                <form>
                    <input 
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder="Img URL"
                        type="text"
                        name="imgUrl"
                        onChange={context.handleChange}
                    />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        onChange={context.handleChange}
                    />
                    <input 
                        type="submit"
                        value="Submit"
                    />
                </form>
            )}
        </ThingConsumer>
    )
}

export default Form