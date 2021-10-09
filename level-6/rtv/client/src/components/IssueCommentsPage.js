import React from 'react'

function IssueCommentsPage(props) {
    const { title, description } = props.location.state

    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </>
    )
}

export default IssueCommentsPage