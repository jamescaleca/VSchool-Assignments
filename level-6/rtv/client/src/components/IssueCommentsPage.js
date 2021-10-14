import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'

function IssueCommentsPage(props) {
    const { title, description, _id, comments } = props.location.state

    const initInputs = {
        comment: '',
        user: props.user || '',
        _id: props._id || ''
    }

    const [inputs, setInputs] = useState(initInputs)
    // const [issueComments, setCommentState] = useState(comments)
    console.log(comments)
    const { commentSubmitRedir, userAxios, getIssueById, addComment } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(inputs, _id)
        setInputs(initInputs)
        // commentSubmitRedir(_id)
        getIssueById(_id)
    }


    const { comment, username } = inputs

    const allIssueComments = comments.map(comment => (
        <>
            <li>
                <p>{comment.comment}</p>
                <p>{comment.user}</p>
            </li>
            <hr />
        </>
    ))

    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>

            <form onSubmit={handleSubmit} id='new-comment-form'>
                <p>Leave a comment as {username}</p>
                <input
                    type='text'
                    name='comment'
                    value={comment}
                    onChange={handleChange}
                    placeholder='Write your well-informed opinions here...'
                />
                <button>Comment</button>
            </form>

            {/* <h2>{_id}</h2> */}
            <ul id='comments-section'>
                {allIssueComments}
            </ul>
        </>
    )
}

export default IssueCommentsPage