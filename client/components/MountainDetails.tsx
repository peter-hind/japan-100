import { useState } from 'react'
import Map from './Map.tsx'
import type MapFeature from '../../models/mapfeature.ts'
import { getMountain, climbMountain } from '../apiClient.ts'
import Mountain from '../../models/mountain.ts'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  featureData: any
}

function MountainDetails(props: Props) {
  const { user, isAuthenticated, isLoading } = useAuth0()
  console.log('mountaindeets', user)
  return (
    <div>
      <h2>Mountain Details</h2>
      {props.featureData && (
        <div className="feature-container">
          <div className="feature-box">
            <div className="feature-icon">⛰️</div>
            <h3>Mountain Name:</h3>
            {props.featureData.name}
          </div>
          <div className="feature-box">
            <div className="feature-icon">🗺️</div>
            <h3>Prefecture:</h3>
            {props.featureData.prefecture}
          </div>
          <div className="feature-box">
            <div className="feature-icon">🔝</div>
            <h3>Elevation:</h3>
            {props.featureData.elevation_m}m
          </div>
          <div className="feature-box">
            <div className="feature-icon">📒</div>
            <h3>Description:</h3>
            {props.featureData.description}
          </div>
          <button onClick={() => climbMountain(user.sub, props.featureData.id)}>
            Climbed?
          </button>
        </div>
      )}
    </div>
  )
}

export default MountainDetails
