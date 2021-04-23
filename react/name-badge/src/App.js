import React from "react"
import Badge from "./Badge"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            aboutYou: "",
            badgeArr: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleNum = this.handleNum.bind(this)
    }

    handleSubmit(event) {
        this.setState(prevState => {
            return {
                badgeArr: [
                    ...prevState.badgeArr, {...prevState}
                ],
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                favFood: "",
                aboutYou: ""
            }
        })
        event.preventDefault()
    }

    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleNum(event) {
        let phoneNumber = event.target.value;
        if (!Number(phoneNumber)) {
            return
        }
        this.setState({
            [event.target.name]: phoneNumber
        })
    }

    render() {
        const badges = this.state.badgeArr.map((badge) => { return <Badge key={this.state} {...badge} />})
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <input 
                        style={{width:"200px"}}
                        value={this.state.firstName}
                        type="name" 
                        name="firstName" 
                        placeholder="First Name"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        style={{width:"200px"}}
                        value={this.state.lastName}
                        type="name" 
                        name="lastName"
                        placeholder="Last Name"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <input
                        style={{width:"200px"}}
                        value={this.state.email}
                        type="text" 
                        name="email"
                        placeholder="Email"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        style={{width:"200px"}}
                        value={this.state.birthPlace}
                        type="text" 
                        name="birthPlace"
                        placeholder="Place of Birth"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <input 
                        style={{width:"200px"}}
                        value={this.state.phone}
                        type="tel" 
                        name="phone"
                        placeholder="Phone"
                        minLength="10"
                        onChange={this.handleNum}
                        required
                    />
                    <input 
                        style={{width:"200px"}}
                        value={this.state.favFood}
                        type="text" 
                        name="favFood"
                        placeholder="Favorite Food"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <textarea 
                        style={{height:"100px", width:"400px"}}
                        value={this.state.aboutYou} 
                        type="text"
                        name="aboutYou"
                        placeholder="Tell us about yourself"
                        minLength="3"
                        onChange={this.handleChange}
                        required
                    />
                    <br />
                    <input 
                        style={{padding:"5px"}}
                        id="submitButton" 
                        type="submit" 
                        value="Submit"
                    />
                </form>
                <div id="nameBadge">
                    {badges}
                </div>
            </div>
        )
    }
}

export default App