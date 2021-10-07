import React from 'react'
import { Link } from 'react-router-dom'
import IssueCommentsPage from './IssueCommentsPage.js'

export default function IssueList(props) {
    const { issues } = props

    return (
        <ul className='issue-list'>
            { issues.map((issue, _id) => 
                <Link 
                    to={{
                        pathname: `/api/issues/${issue._id}`,
                        state: 
                            {
                                _id: issue._id,
                                title: issue.title,
                                description: issue.description
                            }
                    }}
                >
                    <h1>{issue.title}</h1>
                    <h3>{issue.description}</h3>
                </Link>
            ) }
        </ul>
    )
}