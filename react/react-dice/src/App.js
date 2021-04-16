import React from "react"
import Dicebox from "./Dicebox"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        function getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        this.setState(prevState =>
            prevState = {
                num1: getRandom(1, 7),
                num2: getRandom(1, 7),
                num3: getRandom(1, 7),
                num4: getRandom(1, 7),
                num5: getRandom(1, 7)
            }
        )
    }

    render() {
        return(
            <div>
                <h1><Dicebox die={`${this.state.num1}`}/></h1>
                <h1><Dicebox die={`${this.state.num2}`}/></h1>
                <h1><Dicebox die={`${this.state.num3}`}/></h1>
                <h1><Dicebox die={`${this.state.num4}`}/></h1>
                <h1><Dicebox die={`${this.state.num5}`}/></h1>
                
                <button onClick={this.roll}>Roll</button>
            </div>
        )
    }
}

export default App