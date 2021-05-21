import React, {Component} from 'react'
import './App.css'
import CurrentMeme from './CurrentMeme'
import AddedMemesComponent from "./AddedMemesComponent"
import PreviewMeme from "./PreviewMeme"

class App extends Component {
    constructor(){
        super()
        this.state = {
            randomNum: Math.floor(Math.random() * 100),
            memes: [],
            addedMemes: [],
            currentEditMeme: {},
            previewMeme: {},
            previewMode: false,
            editMode: false,
            topText: "",
            bottomText: "",
            memeUrl: "",
            name: "",
            id: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePreview = this.handlePreview.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.stopEditing = this.stopEditing.bind(this)
    }

    componentDidMount() {
        // this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    memes: response.data.memes.map(meme => meme = {...meme, id: Math.random() * 100, topText: "", bottomText: ""}),
                    memeUrl: response.data.memes[this.state.randomNum].url,
                    name: response.data.memes[this.state.randomNum].name
                })
            })
    }

    randomNumberGenerator = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * 100)
        this.setState({
            randomNum: randomNum,
            memeUrl: this.state.memes[randomNum].url,
            name: this.state.memes[randomNum].name
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handlePreview = (event) => {
        event.preventDefault()
        this.setState((prevState => {
            let queuedMeme = {
                topText: this.state.topText,
                bottomText: this.state.bottomText,
                memeUrl: this.state.memeUrl,
                name: this.state.name,
                id: Math.floor(Math.random() * 100),
                editMode: this.state.editMode
            }
            return ({
                previewMeme: queuedMeme,
                previewMode: !prevState.previewMode
            })
        }))
        return
    }

    handleCancel = (event) => {
        event.preventDefault()
        this.setState(prevState => {return ({previewMode: !prevState.previewMode})})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return (
                this.state.previewMode === true ? 
                {
                    addedMemes: [
                        ...prevState.addedMemes, this.state.previewMeme
                    ],
                    topText: "",
                    bottomText: "",
                    previewMode: !this.state.previewMode,
                    id: this.state.id + 1
                    
                }
                : this.state.editMode === true ?
                {
                    addedMemes: [
                        ...prevState.addedMemes, {...this.state.currentEditMeme},
                    ],
                    topText: "",
                    bottomText: "",
                    editMode: !this.state.editMode
                }
                : this.state.previewMode === false && this.state.editMode === false ?
                {
                    addedMemes: [
                        prevState.addedMemes,
                    ],
                    topText: "",
                    bottomText: "",
                }
                : null
            )
        })
    }

    handleDelete = (id) => {
        this.setState(prevState => {
            let newMemes = prevState.addedMemes.filter(meme => meme.id !== id)
            return {
                addedMemes: newMemes
            }
        })
    }
    
    stopEditing (meme, memeId) {
        let filteredMeme = this.state.addedMemes.filter((meme) => {return meme.id === memeId})
        let newMemes = this.state.addedMemes
        let indexFinder = newMemes.indexOf(filteredMeme[0])
        filteredMeme[0].editMode = false
        filteredMeme[0].topText = meme.topText
        filteredMeme[0].bottomText = meme.bottomText
        newMemes[indexFinder] = filteredMeme[0]
        this.setState({currentEditMeme: meme, addedMemes: newMemes})
    }

    handleEdit = (id) => {
        let filteredMeme = this.state.addedMemes.filter(meme => {return meme.id === id})
        let newMemes = this.state.addedMemes
        let indexFinder = newMemes.indexOf(filteredMeme[0])
        this.setState({addedMemes: newMemes})
        filteredMeme[0].editMode = true
        newMemes[indexFinder] = filteredMeme[0]
        return
    }

    render(){
        const mappedMemes = this.state.addedMemes.map((meme) => {
            return (
                <div>
                    <li>
                        <AddedMemesComponent 
                            {...meme}
                            handleSubmit={this.handleSubmit}
                            handleEdit={this.handleEdit} 
                            handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            stopEditing={this.stopEditing}
                        /> 
                    </li>
                </div>
            )
        })
        return (
            <div>
                {this.state.previewMode ?
                    <PreviewMeme 
                        handleSubmit={this.handleSubmit}
                        handleCancel={this.handleCancel}
                        topText={this.state.previewMeme.topText}
                        bottomText={this.state.previewMeme.bottomText}
                        memeUrl={this.state.previewMeme.memeUrl}
                        name={this.state.previewMeme.name}
                        id={this.state.previewMeme.id}
                    /> 
                    :
                    <div>
                        <CurrentMeme 
                            id={this.state.randomNum} 
                            key={this.state.randomNum} 
                            memeUrl={this.state.memeUrl}
                            topText={this.state.topText}
                            bottomText={this.state.bottomText}
                            name={this.state.name}
                        />
                        <button onClick={this.randomNumberGenerator}>Refresh</button>
                        <form id="form" name="new-meme" onSubmit={this.handlePreview}>
                            <input 
                                placeholder="Top Text"
                                type="text"
                                name="topText"
                                value={this.state.topText}
                                onChange={this.handleChange} 
                            />
                            <br/>
                            <input 
                                placeholder="Bottom Text"
                                type="text"
                                name="bottomText"
                                value={this.state.bottomText}
                                onChange={this.handleChange}
                            />
                            <br/>
                            <input
                                id="submitButton"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                        <ul style={{listStyle:"none"}}>{mappedMemes}</ul>
                    </div>
                }
            </div>
        )
    }
}

export default App;
