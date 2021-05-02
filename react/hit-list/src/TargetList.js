import React, {Component} from "react"
import TargetComponent from "./TargetComponent"


class TargetList extends Component {
    constructor() {
        super()
        this.state = {
            targets: [],
            name: "",
            image: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.handleCheck = this.handleCheck.bind(this)
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

    // handleCheck(id) {
    //     this.setState(prevState => {
    //         const updatedList = prevState.targets.map(target => {
    //             if (target.id === id) {
    //                 target.completed = !target.completed
    //             }
    //             return target
    //         })
    //         return {
    //             targets: updatedList
    //         }
    //     })
    // }

    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        this.setState(prevState => {
            return {
                targets: [
                    ...prevState.targets, {...prevState}
                ],
                name: "",
                image: ""
            }
        })
        event.preventDefault()
    }

    render() {
        const mappedTargets = this.state.targets.map((target, index) => {
            return <TargetComponent key={index} {...target} completed={false} handleCheck={this.handleCheck} />
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