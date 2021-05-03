import React, {Component} from "react"
import axios from "axios";

class RandomColor extends Component {
    constructor() {
        super()
        this.state = {
            randomColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then((response) => {
                this.setState({
                    randomColor: `#${response.data.new_color}`
                })
            })

    }

    handleChange(event){
        event.preventDefault()
        this.componentDidMount()
    }

    render() {
        return (
            <div>
                <h1 style={{
                    border: "2px solid black", 
                    padding: "10px",
                    backgroundColor: this.state.randomColor
                    }}
                >Color
                </h1>
                <button id="change" onClick={this.handleChange}>Change!</button>
            </div>
        )
    }
}

export default RandomColor