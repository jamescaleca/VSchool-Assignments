import React, { useState, useContext } from 'react'
import IssueForm from './IssueForm.js'
import { UserContext } from '../context/UserProvider'

function IssuePreview(props) {
    const { _id, title, description } = props
    const {editIssue, deleteIssue} = useContext(UserContext)
    const [editToggle, setEditToggle] = useState(false)

    function toggle(){setEditToggle(prevToggle => !prevToggle)}

    return (
        <>
            <h2>{description}</h2>
            <button onClick={() => deleteIssue(_id)}>Delete</button>
            <button onClick={() => toggle()}>Edit</button>

            {editToggle === true ?
                <>
                    <IssueForm 
                        _id={_id}
                        title={title}
                        description={description}
                        submit={editIssue}
                        toggle={toggle}
                        editToggle={editToggle}
                    />
                    <button onClick={() => toggle()}>Done editing</button>
                </>
                :
                    null
            }
        </>
    )
}

export default IssuePreview