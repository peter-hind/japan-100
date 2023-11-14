import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { handleUser } from '../apiClient'
import User from '../../models/user'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  isAuthenticated ? handleUser(user as User) : null
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    )
  )
}

export default Profile
