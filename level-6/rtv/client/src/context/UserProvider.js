import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        issues: [],
        currentIssue: {},
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserIssues()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            issues: []
        })
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    }

    // Get All Issues
    function getAllIssues() {
        userAxios.get('/api/issues')
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // GET USER ISSUES
    function getUserIssues() {
        userAxios.get('/api/issues/user')
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // ADD AN ISSUE
    function addIssue(newIssue) {
        userAxios.post('/api/issues', newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //GET ISSUE BY ID
    function getIssueById(issueId) {
        userAxios.get(`/api/issues/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                currentIssue: res.data
            })))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // ADD A COMMENT
    function addComment(newComment, issueId) {
        userAxios.post(`/api/issues/${issueId}/comments`, newComment)
            .then(res => setUserState(prevState => ({
                ...prevState,
                comments: [...prevState.comments, res.data]
            })))
            .catch(err => console.log(err.response.data.errMsg))
            return getIssueById(issueId)
    }

    //EDIT ISSUE
    function editIssue(updates, issueId) {
        userAxios.put(`/api/issues/${issueId}`, updates)
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue => 
                    issue._id !== issueId ? issue : res.data)})))
            .catch(err => console.log(err))
            return getUserIssues()
    }

    //DELETE ISSUE
    function deleteIssue(issueId) {
        userAxios.delete(`/api/issues/${issueId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId)
            })))
            .catch(err => console.log(err))
            return getUserIssues()
    }

    const history = useHistory()

    function submitBtnRedirect() {
        history.push('/profile')
    }

    function commentSubmitRedir(issueId) {
        history.push(`/api/issues/${issueId}`)
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                getAllIssues,
                getUserIssues,
                getIssueById,
                editIssue,
                deleteIssue,
                signup,
                login,
                logout,
                addIssue,
                addComment,
                resetAuthErr,
                submitBtnRedirect,
                commentSubmitRedir,
                userAxios
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}