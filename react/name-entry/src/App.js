import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            const newName = `${this.state.firstName} ${this.state.lastName}`
            return {names: [...prevState.names, newName]}
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input
                        value={this.state.firstName}
                        type="name"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        value={this.state.lastName}
                        type="name"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    <hr />
                </form>
                <h2>Entered names:</h2>
                <ol id="namesList">
                    {this.state.names.map(item => <li>{item}</li>)}
                </ol>
            </main>
        )
    }
}

export default App