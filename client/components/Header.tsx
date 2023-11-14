import React from 'react'
import LoginButton from './LoginButton'
import Profile from './Profile'
import LogoutButton from './LogoutButton'

function Header() {
  return (
    <div className="header">
      <img src="/image/JCLogo.png" alt="JC Logo" />
      <h1>Japan Completionist</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  )
}

export default Header
