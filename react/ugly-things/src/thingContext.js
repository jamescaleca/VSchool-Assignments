import axios from "axios"
import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends Component {
    state = {
        things: [],
        title: "",
        description: "",
        imgUrl: ""
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/jamescaleca/thing")
            .then(res => {
                const things = res.data;
                this.setState({things})
            })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newThing = {
            title: this.state.title, 
            description: this.state.description, 
            imgUrl: this.state.imgUrl
        }
        console.log(newThing)
        axios.post("https://api.vschool.io/jamescaleca/thing", newThing)
            .then(response => console.log(response.data) )
    }

    render() {
        const {things} = this.state
        console.log({things})
        return (
            <Provider value={{things, handleChange: this.handleChange, handleSubmit: this.handleSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}