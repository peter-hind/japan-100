import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../api/apiClient'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  const {
    data: allProfiles,
    isError,
    isLoading: isPending,
  } = useQuery({ queryKey: ['users'], queryFn: () => getAllUsers() })
  if (isError) {
    return <div>There was an error getting all profiles...</div>
  }

  if (!allProfiles || isPending) {
    return <div>Loading all profiles...</div>
  }

  const currentUser = allProfiles.find(
    (profile) => profile.auth0Id === user?.sub
  )

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <div className="profile-bar">
        <img
          className="profile-picture"
          src={currentUser?.picture}
          alt={currentUser?.username}
        />
        <h2>{currentUser?.username}</h2>
      </div>
    )
  )
}

export default Profile
