import React from "react"
import TargetList from "./TargetList"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    
    render() {
        const text = this.state.loading ? "Loading..." : <TargetList />
        return (
            <div>
                <header style={{fontSize: "30px"}}>Don Corleone's Hit List</header>
                {text}
                <br/>
            </div>
        )
    }
}

export default App