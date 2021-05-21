import React, {Component} from "react"

class AddedMemesComponent extends Component {
    state = {
        editTopText: this.props.topText,
        editBottomText: this.props.bottomText
    }

    handleChange = (e) => {
        const {name, value} = e.target
        return this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.stopEditing({topText: this.state.editTopText, bottomText: this.state.editBottomText}, this.props.id)
        return
    }
    
    render() {
        return (
            this.props.editMode ? 
            <div>
                <h3>{this.props.topText}</h3>
                <img src={this.props.memeUrl} alt={this.props.name} />
                <h3>{this.props.bottomText}</h3>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="editTopText"
                        type="text"
                        placeholder={this.state.editTopText}
                        value={this.state.editTopText}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="editBottomText"
                        type="text"
                        placeholder={this.state.editBottomText}
                        value={this.state.editBottomText}
                        onChange={this.handleChange}
                    />
                    <input 
                        id="editSubmitButton"
                        name="Submit"
                        type="submit"
                    />
                </form>
            </div>
            :
            <div name="addedMeme">
                <h3>{this.props.topText}</h3>
                <img src={this.props.memeUrl} alt={this.props.name} />
                <h3>{this.props.bottomText}</h3>
                <br />
                <button onClick={() => this.props.handleEdit(this.props.id)}>Edit</button>
                <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default AddedMemesComponent