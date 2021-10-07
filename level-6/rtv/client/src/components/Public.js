import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Public(){
    const { issues, getAllIssues } = useContext(UserContext)
    console.log(issues)

    useEffect(() => {
        getAllIssues()
    }, [])

    return (
        <div className="public">
            <IssueList issues={issues} />
        </div>
    )
}