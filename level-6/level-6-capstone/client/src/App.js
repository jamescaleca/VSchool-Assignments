import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './contexts/userProvider'

function App() {
    const { token, logout } = useContext(UserContext)
    return (
        <div className='app'>
            { token && <Navbar logout={logout} /> }
            <Switch>
                <Route 
                    exact path='/'
                    render={() => token ? <Redirect to='/home'/> : <Auth />}
                />
                <ProtectedRoute 
                    path='/home'
                    component={Home}
                    redirectTo='/'
                    token={token}
                />
            </Switch>
        </div>
    )
}

export default App