import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import UserProvider from './contexts/userProvider'
import DataProvider from './contexts/dataProvider'

ReactDOM.render(
    <Router>
        <UserProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </UserProvider>
    </Router>,
    document.getElementById('root')
)