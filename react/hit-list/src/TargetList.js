import React, {Component} from "react"
import TargetComponent from "./TargetComponent"


class TargetList extends Component {
    constructor() {
        super()
        this.state = {
            targets: [],
            name: "",
            image: "",
            completed: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    targets: response
            })
        })
    }

    handleChange(event) {
        event.preventDefault()
        const {name, value, type, completed} = event.target
        type === "checkbox" ? this.setState({[completed]: true}) : this.setState({[name]: value})
        
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(elseState => {
            return {
                targets: [
                    ...elseState.targets, {...elseState}
                ],
                name: "",
                image: "",
                completed: false
            }
        })
    }

    render() {
        const mappedTargets = this.state.targets.map((target, index) => {
            return <TargetComponent key={index} {...target} completed={false} handleChange={this.handleChange} />
        })
        // console.log({mappedTargets})
        return (
            <div>
                <ul style={{
                    listStyle: "none", 
                    display: "grid", 
                    gridTemplateColumns: "auto auto auto", 
                    gridTemplateRows: "auto auto auto",
                    padding: "0px"
                }}>
                    {mappedTargets}
                </ul>

                <h1>New target:</h1>
                <form id="form" name="new-target" onSubmit={this.handleSubmit}>
                    <input 
                        style={{margin: "10px"}}
                        value={this.state.name}
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        style={{margin: "10px"}}
                        value={this.state.image}
                        type="text" 
                        name="image" 
                        placeholder="Image" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        style={{margin: "10px"}}
                        id="submitButton"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
            
        )
    }
}

export default TargetList