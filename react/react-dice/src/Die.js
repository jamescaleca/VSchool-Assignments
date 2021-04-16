import React from "react"

class Die extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.die}</h1>
            </div>
        )
    }
}

export default Die