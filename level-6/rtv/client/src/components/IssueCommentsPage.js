import React, { useEffect, useContext, useParams, useState  } from 'react'
import { UserContext } from '../context/UserProvider.js'

function IssueCommentsPage(props) {
    const { getIssueById, issues, getAllIssues } = useContext(UserContext)
    const [currentIssue, setCurrentIssue] = useState()
    const { issue } = props

    // const {_id} = useParams(_id)
    console.log(issues)

    useEffect(() => {
        getIssueById(issue._id)
    }, [])

    // console.log()

    return (
        <>
            <h1>{issues}</h1>
            {/* <h2></h2> */}
        </>
    )
}

export default IssueCommentsPage