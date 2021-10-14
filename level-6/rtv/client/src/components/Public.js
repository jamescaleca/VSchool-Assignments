import React, { useContext, useEffect } from 'react'
import PublicIssueList from './PublicIssueList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Public(){
    const { issues, getAllIssues } = useContext(UserContext)
    console.log(issues)

    useEffect(() => {
        getAllIssues()
    }, [])

    return (
        <div className="public">
            <PublicIssueList issues={issues} />
        </div>
    )
}