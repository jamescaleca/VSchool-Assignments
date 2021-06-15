import React, {Component} from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends Component {
    state = {
        things: [],
        title: "",
        description: "",
        imgUrl: "",
        editMode: false,
        editTitle: "",
        editDescription: "",
        editImgUrl: "",
        currentEditThing: {}
    }

    getThings = () => {
        axios.get("https://api.vschool.io/jamescaleca/thing")
            .then(res => {
                const things = res.data;
                this.setState({things: [...things]})
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
        axios.post(`https://api.vschool.io/jamescaleca/thing/`, newThing)
            .then(res => this.getThings())
        return
    }

    editSubmit = (thingId) => {
        let editedThing = {
            title: this.state.editTitle,
            description: this.state.editDescription,
            imgUrl: this.state.editImgUrl,
            _id: thingId
        }
        console.log(editedThing)
        axios.put(`https://api.vschool.io/jamescaleca/thing/${thingId}`, editedThing)
            .then(() => this.getThings())
    }

    handleDelete = (thingId) => {
        axios.delete(`https://api.vschool.io/jamescaleca/thing/${thingId}`)
            .then(res => this.getThings())
        
        const things = this.state.things.filter(thing => thing._id !== thingId)
        this.setState([ ...things ])
    }

    editThing = (thingId) => {
        let filteredThing = this.state.things.filter(thing => {return thing._id === thingId})
        let newThings = this.state.things
        let indexFinder = newThings.indexOf(filteredThing[0])
        let currentEditThing1 = newThings[indexFinder]
        this.setState((prevState) => {
            return({
                currentEditThing: currentEditThing1,
                editMode: !prevState.editMode,
            })
        })
        console.log(this.state.editMode)
        newThings[indexFinder] = filteredThing[0]
    }

    render() {
        return (
            <Provider value={{
                things: this.state.things, 
                currentEditThing: this.state.currentEditThing,
                editMode: this.state.editMode,
                editTitle: this.state.editTitle,
                editDescription: this.state.editDescription,
                editImgUrl: this.state.editImgUrl,
                handleChange: this.handleChange, 
                handleSubmit: this.handleSubmit, 
                handleDelete: this.handleDelete,
                editThing: this.editThing,
                editSubmit: this.editSubmit,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}