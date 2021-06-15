import React from "react"
import "./styles.css"
import Form from "./Form"
import {ThingConsumer} from "./thingContext"
import DisplayThings from "./DisplayThings"
import EditThing from "./EditThing"

function App() {
    return (
        <ThingConsumer>
            {context => (
                context.editMode ?
                <EditThing 
                    editMode={context.editMode}
                    currentEditThing={context.currentEditThing}
                    handleChange={context.handleChange}
                    editThing={context.editThing}
                    handlePut={context.handlePut}
                    editTitle={context.editTitle}
                    editDescription={context.editDescription}
                    editImgUrl={context.editImgUrl}
                />
                : context.editMode === false ?
                <div>
                    <Form />
                    <ul>
                        <DisplayThings 
                            things={context.things}
                            handleDelete={context.handleDelete}
                            editThing={context.editThing}
                        />
                    </ul>

                </div>
                :
                null
            )}
        </ThingConsumer>
    )
}

export default App