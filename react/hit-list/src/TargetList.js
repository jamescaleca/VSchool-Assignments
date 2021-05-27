import React, {Component} from "react"
import TargetComponent from "./TargetComponent"
class TargetList extends Component {
    state = {
        targets: [],
        name: "",
        image:"",
        completed: false
    }
    
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    targets: response.map(item => item = {...item, id: Math.random() * 80})
            })
        })
    }
    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleInputClick = (id) => {
        let filteredTarget = this.state.targets.find(target => target.id === id)
        let indexFinder = this.state.targets.indexOf(filteredTarget)
        filteredTarget.completed = !filteredTarget.completed
        let newTargets = this.state.targets
        newTargets[indexFinder] = filteredTarget
        this.setState({targets: newTargets})
        return console.log(id) 
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                targets: [...prevState.targets, {...prevState}],
                name: "",
                image: "",
                completed: true
            }
        })
    }
    render() {
        const mappedTargets = this.state.targets.map((target, index) => {
            return <TargetComponent key={index} handleInputClick={this.handleInputClick} handleChange={this.handleChange} {...target} />
        })
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