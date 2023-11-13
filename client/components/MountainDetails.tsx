import { useState } from 'react'
import Map from './Map.tsx'
import type MapFeature from '../../models/mapfeature.ts'
import { getMountain } from '../apiClient.ts'
import Mountain from '../../models/mountain.ts'

function MountainDetails() {
  const [featureData, setFeatureData] = useState<Mountain | null>(null)

  async function handleFeatureClick(data: MapFeature): Promise<void> {
    const mountain = await getMountain(data.properties.title)
    setFeatureData(mountain)
  }

  return (
    <div>
      <Map onFeatureClick={handleFeatureClick} layer={'100-mountains'} />
      <h2>Mountain Details</h2>
      {featureData && (
        <div className="feature-container">
          <div className="feature-box">
            <div className="feature-icon">⛰️</div>
            <h3>Mountain Name:</h3>
            {featureData.name}
          </div>
          <div className="feature-box">
            <div className="feature-icon">🗺️</div>
            <h3>Prefecture:</h3>
            {featureData.prefecture}
          </div>
          <div className="feature-box">
            <div className="feature-icon">🔝</div>
            <h3>Elevation:</h3>
            {featureData.elevation_m}m
          </div>
          <div className="feature-box">
            <div className="feature-icon">📒</div>
            <h3>Description:</h3>
            {featureData.description}
          </div>
        </div>
      )}
    </div>
  )
}

export default MountainDetails
