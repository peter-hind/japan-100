import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const { user, isAuthenticated } = useAuth0()
  return (
    <div className="nav-bar">
      <Profile />
      {user ? (
        <>
          <Link to="/">
            <button className="login-button">My Map</button>
          </Link>
          <Link to="/list-view">
            <button className="login-button">My Lists</button>
          </Link>
          <LogoutButton />
        </>
      ) : (
        <div>
          <LoginButton />
          <Link to="/signup">
            <button className="login-button">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Nav
