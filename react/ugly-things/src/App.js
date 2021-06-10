import React, {Component} from "react"
import "./styles.css"

class App extends Component {
    state ={
        things: []
    }
    
    componentDidMount() {
        fetch("https://api.vschool.io/jamescaleca/thing")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    things: response.data.things.map(thing => thing = {...thing})})
            })
    }
}