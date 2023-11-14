import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import Mountain from '../../models/mountain.ts'
import { getMountain } from '../apiClient.ts'
import MapFeature from '../../models/mapfeature.ts'
import MountainDetails from './MountainDetails.tsx'

function HomePage() {
  const [layer, setLayer] = useState('')
  const [featureData, setFeatureData] = useState<Mountain | null>(null)

  const handleIconClick = (newLayer: string) => {
    setLayer(newLayer)
  }

  async function handleFeatureClick(data: MapFeature): Promise<void> {
    const mountain = await getMountain(data.properties.title)
    setFeatureData(mountain)
  }

  return (
    <>
      <LayerSelect currentLayer={layer} changeLayer={handleIconClick} />
      <Map onFeatureClick={handleFeatureClick} currentLayer={layer} />
      <MountainDetails featureData={featureData} />
    </>
  )
}

export default HomePage
