import React from 'react'
import { Link } from 'react-router-dom'
import IssueCommentsPage from './IssueCommentsPage.js'

export default function IssueList(props) {
    const { issues } = props
    console.log(issues)
    return (
        <ul className='issue-list'>
            { issues.map((issue) => 
                // console.log(issue),
                <Link 
                    to={{
                        pathname: `/api/issues/${issue._id}`,
                        // state: 
                        //     {
                        //         _id: issue._id,
                        //         title: issue.title,
                        //         description: issue.description
                        //     }
                    }}
                    // issue={issue}
                >
                    <h1>{issue.title}</h1>
                    <h3>{issue.description}</h3>
                </Link>
            ) }
        </ul>
    )
}