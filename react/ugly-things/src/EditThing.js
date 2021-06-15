import React from "react"
import {ThingConsumer} from "./thingContext"
import "./styles.css"

function EditThing() {
    return(
        <ThingConsumer>
            {context => (
                <form onSubmit={context.editSubmit(context.currentEditThing._id)}>
                    <img
                        src={context.currentEditThing.imgUrl}
                        alt={context.currentEditThing.title}
                        style={{height: "25%", width: "25%"}}
                    />
                    <input 
                        placeholder={context.currentEditThing.title}
                        type="text"
                        name="editTitle"
                        value={context.title}
                        onChange={context.handleChange}
                    />
                    <input 
                        placeholder={context.currentEditThing.description}
                        type="text"
                        name="editDescription"
                        value={context.editDescription}
                        onChange={context.handleChange}
                    />
                    <input 
                        placeholder={context.currentEditThing.imgUrl}
                        type="text"
                        name="editImgUrl"
                        value={context.editImgUrl}
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

export default EditThing