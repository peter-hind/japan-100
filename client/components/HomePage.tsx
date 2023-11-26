import { useState } from 'react'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import MapFeature from '../../models/mapfeature.ts'
import { getFeature } from '../api/blossomApi.ts'
import FeatureDetails from './FeatureDetails.tsx'
import Feature from '../../models/Ifeature.ts'

function HomePage() {
  const [layer, setLayer] = useState('')
  const [oldLayer, setOldLayer] = useState('')
  const [featureData, setFeatureData] = useState<Feature | null>(null)

  const handleIconClick = (newLayer: string) => {
    setLayer((prevLayer) => {
      setOldLayer(prevLayer)
      return newLayer
    })
  }

  async function handleFeatureClick(data: MapFeature): Promise<void> {
    const feature = await getFeature(layer, data.properties.title)
    setFeatureData(feature)
  }

  return (
    <>
      <LayerSelect
        currentLayer={layer}
        changeLayer={handleIconClick}
        setFeatureData={setFeatureData}
      />
      <div className="map-details">
        <Map
          onFeatureClick={handleFeatureClick}
          currentLayer={layer}
          oldLayer={oldLayer}
        />
        <FeatureDetails featureData={featureData} layer={layer} />
      </div>
    </>
  )
}

export default HomePage
