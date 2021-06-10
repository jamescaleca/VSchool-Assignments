import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends Component {
    state = {
        uglyThings: []
    }

    render() {
        return (
            <Provider value={{}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}