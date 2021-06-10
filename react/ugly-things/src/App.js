import React, {Component} from "react"
import "./styles.css"
import Form from "./Form"
import axios from "axios"

class App extends Component {
    state ={
        things: []
    }
    
    componentDidMount() {
        axios.get("https://api.vschool.io/jamescaleca/thing")
            .then(res => {
                const things = res.data;
                this.setState({things})
            })
    }

    render(){
        return (
            <div>
                <Form />
                <ul>
                    {this.state.things.map(thing => 
                        <li style={{listStyle: "none"}}>
                            <h2>{thing.title}</h2>
                            <img style={{height: "25%", width: "25%"}}src={thing.imgUrl} alt={thing.title}/>
                            <h4>{thing.description}</h4>
                            <hr/>
                        </li>
                    )}
                    
                </ul>
            </div>
        )
    }
}

export default App