import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { handleUser } from '../api/apiClient'
import User from '../../models/user'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  isAuthenticated ? handleUser(user as User) : null

  return (
    isAuthenticated && (
      <div className="profile-bar">
        <img className="profile-picture" src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
      </div>
    )
  )
}

export default Profile
