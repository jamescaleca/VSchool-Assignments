import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
    }

    handleClick1() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map(color => {
                    if (color === "white") {
                        return "black";
                    }
                    if (color === "black") {
                        return "white";
                    } else {
                        return "white";
                    }
                })
            }
        })
    }

    handleClick2() {
        this.setState(prevState => 
            prevState.colors = 
            ["purple", "purple", `${prevState.colors[2]}`, `${prevState.colors[3]}`]
        )
    }

    handleClick3() {
        this.setState(prevState => 
            prevState.colors = 
            [`${prevState.colors[0]}`, `${prevState.colors[1]}`, "blue", `${prevState.colors[3]}`]
        )
    }
    
    handleClick4() {
        this.setState(prevState =>
            prevState.colors = 
            [`${prevState.colors[0]}`, `${prevState.colors[1]}`, `${prevState.colors[2]}`, "blue"]
        )
    }

    render() {
        return (
            <div>
                <h1>DJ React</h1>
                <div className="container" style={{background: this.state.color}}>
                    <div><Square color={this.state.colors[0]}/></div>
                    <div><Square color={this.state.colors[1]}/></div>
                    <div><Square color={this.state.colors[2]}/></div>
                    <div><Square color={this.state.colors[3]}/></div>

                    <button onClick={this.handleClick1}>B/W</button>
                    <button onClick={this.handleClick2}>Purple</button>
                    <button onClick={this.handleClick3}>L-Blue</button>
                    <button onClick={this.handleClick4}>R-Blue</button>
                </div>
            </div>
        )
    }
}

export default App