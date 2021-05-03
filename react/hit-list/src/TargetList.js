import React, {Component} from "react"
import TargetComponent from "./TargetComponent"


class TargetList extends Component {
    constructor() {
        super()
        this.state = {
            targets: []
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
        this.setState(prevState => {
            return {
                targets: [
                    ...prevState.targets, {...prevState}
                ],
                
                name: "",
                image: "",
            }
        })
    }

    render() {
        const mappedTargets = this.state.targets.map((target, index) => {
            return <TargetComponent key={index} completed={false} handleChange={this.handleChange} {...target} />
        })
        console.log({mappedTargets})
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
                        value={mappedTargets.name}
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        style={{margin: "10px"}}
                        value={mappedTargets.image}
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