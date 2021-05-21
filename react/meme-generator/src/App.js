import React from "react"
import MemeComponent from "./MemeComponent"

const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.imgflip.com/get_memes", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        
    }
}


class App extends React.Component() {
    constructor(){
    super()
    this.state = {
        memes: [],
        topText: "",
        bottomText: ""
    }
}

    componentDidMount() {

    }

    handleChange(event) {
        event.preventDefault()
        const {name, value, type } = event.target
        this.setState({[name]: value})
    }


    handleDelete = (id) => {
        let filteredMeme = this.state.memes.find(meme => meme.id === id)
        let indexFinder = this.state.memes.indexOf(filteredMeme)
        let newMemes = this.state.memes
        newMemes[indexFinder] = filteredMeme
        this.setState({memes: newMemes})
        return console.log(id)

       // NEEDS FINISHING
    }


    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                memes: [
                    ...prevState.memes, {...prevState}
                ],
                topText: "",
                bottomText: ""
            }
        })
    }

    render() {
        return (
            <div>
                <MemeComponent key={id} handleChange={this.handleChange} handleDelete={this.handleDelete} {...meme} />
                <button>Delete</button>
                <form id="form" name="new-meme" onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Top Text"
                        value={}
                        type="text"
                        name="topText"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        placeholder="Bottom Text"
                        value={}
                        type="text"
                        name="bottomText"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        id="submitButton"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default App