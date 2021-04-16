import React from "react"

class Dicebox extends React.Component {
    render() {
        return(
            <div>
                {this.props.die}
            </div>
        )
    }
}

export default Dicebox