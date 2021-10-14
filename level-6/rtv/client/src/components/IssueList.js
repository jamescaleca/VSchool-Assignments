import React from 'react'
import { Link } from 'react-router-dom'
import IssuePreview from './IssuePreview'

export default function IssueList(props) {
    const { issues, editIssue, deleteIssue, getUserIssues } = props

    return (
        <ul className='issue-list'>
            { issues.map((issue) => 
                <>
                    <Link 
                        to={{
                            pathname: `/api/issues/${issue._id}`,
                            state: 
                                {
                                    _id: issue._id,
                                    title: issue.title,
                                    description: issue.description,
                                    comments: issue.comments
                                }
                        }}
                    >
                        <h1>{issue.title}</h1>
                    </Link>
                    <IssuePreview 
                        {...issue}
                        key={`${issue._id}`}
                        deleteIssue={deleteIssue}
                        editIssue={editIssue}
                    />
                </>
            )}
        </ul>
    )
}