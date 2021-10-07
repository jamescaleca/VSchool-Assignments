import React, { useEffect, useContext, useParams, useState  } from 'react'
import { UserContext } from '../context/UserProvider.js'

function IssueCommentsPage(props) {
    const { getIssueById } = useContext(UserContext)
    const [currentIssue, setCurrentIssue] = useState()
    const { title, description } = props

    const {_id} = useParams(_id)
    console.log(_id)

    useEffect(() => {
        getIssueById(_id)
    }, [])

    console.log(currentIssue)

    return (
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </>
    )
}

export default IssueCommentsPage