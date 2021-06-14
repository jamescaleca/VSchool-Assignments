import React, {Component} from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends Component {
    state = {
        things: [],
        title: "",
        description: "",
        imgUrl: ""
    }

    getThings = () => {
        axios.get("https://api.vschool.io/jamescaleca/thing")
            .then(res => {
                const things = res.data;
                this.setState({things})
            }
        )
    }
    componentDidMount() {
        this.getThings()
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
            .then(res => console.log(res.data) )
    }

    handleDelete = (thingId) => {
        axios.delete(`https://api.vschool.io/jamescaleca/thing/${thingId}`)
            .then(res => this.getThings())
        
        const things = this.state.things.filter(thing => thing._id !== thingId)
        this.setState([ ...things ])
    }

    render() {
        const {things} = this.state
        return (
            <Provider value={{
                things, 
                handleChange: this.handleChange, 
                handleSubmit: this.handleSubmit, 
                handleDelete: this.handleDelete
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}