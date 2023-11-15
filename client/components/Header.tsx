import React from 'react'
import LoginButton from './LoginButton'
import Profile from './Profile'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from './Nav'

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0()
  return (
    <div className="header">
      <Nav />
      <img className="logo" src="/image/JCLogo.png" alt="JC Logo" />
      <h1>Japan Completionist</h1>
      {/* {user ? <LogoutButton /> : <LoginButton />}
      <Profile /> */}
    </div>
  )
}

export default Header
