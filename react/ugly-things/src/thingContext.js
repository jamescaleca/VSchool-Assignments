import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends Component {
    state = {
        things: []
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            return (
                {}
            )
        })
    }

    render() {
        return (
            <Provider value={{handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}