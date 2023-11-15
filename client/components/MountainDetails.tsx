import { useState } from 'react'
import Map from './Map.tsx'
import type MapFeature from '../../models/mapfeature.ts'
import {
  getMountain,
  climbMountain,
  getClimberMountains,
} from '../apiClient.ts'
import Mountain from '../../models/mountain.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

interface Props {
  featureData: any
}

function MountainDetails(props: Props) {
  const { user, isAuthenticated } = useAuth0()

  const {
    data: mountainList,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['currentmountains'],
    queryFn: () => getClimberMountains(user?.sub as string),
  })
  console.log('mountaindeets', mountainList)
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {props.featureData && (
        <>
          <h2>Mountain Details</h2>
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
          </div>
          {user ? (
            <div>
              <div className="checkoff-box">
                <h3>Climbed?</h3>

                {mountainList?.some(
                  (mountain: any) =>
                    Number(mountain.peak_id) === props.featureData.id
                ) ? (
                  <div className="feature-icon climbed">✅</div>
                ) : (
                  <>
                    <div className="feature-icon not-climbed">❌</div>
                    <button
                      className="login-button"
                      onClick={() =>
                        climbMountain(user?.sub as string, props.featureData.id)
                      }
                    >
                      Climbed?
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

export default MountainDetails
