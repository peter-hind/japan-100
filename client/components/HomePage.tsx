import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import Mountain from '../../models/mountain.ts'
import { getMountain } from '../api/mountainApi.ts'
import MapFeature from '../../models/mapfeature.ts'
import MountainDetails from './MountainDetails.tsx'
import CastleDetails from './CastleDetails.tsx'
import Castle from '../../models/castle.ts'
import { getCastle } from '../api/castleApi.ts'

function HomePage() {
  const [layer, setLayer] = useState('')
  const [oldLayer, setOldLayer] = useState('')
  const [featureData, setFeatureData] = useState<Mountain | Castle | null>(null)

  const handleIconClick = (newLayer: string) => {
    setLayer((prevLayer) => {
      setOldLayer(prevLayer)
      return newLayer
    })
  }

  async function handleFeatureClick(data: MapFeature): Promise<void> {
    let feature
    switch (layer) {
      case '100-mountains':
        feature = await getMountain(data.properties.title)
        break
      case '100-castles':
        feature = await getCastle(data.properties.title)
        break
      default:
        return
    }

    setFeatureData(feature)
  }

  let detailComponent

  switch (layer) {
    case '100-mountains':
      detailComponent = (
        <MountainDetails featureData={featureData as Mountain} />
      )
      break

    case '100-castles':
      detailComponent = <CastleDetails featureData={featureData as Castle} />
      break
    // case '100-onsen':
    //   detailComponent = <OnsenDetails featureData={featureData} />
    //   break
    // case '100-shrines':
    //   detailComponent = <ShrineDetails featureData={featureData} />
    //   break
    // case '100-blossoms':
    //   detailComponent = <BlossomDetails featureData={featureData} />
    //   break
    default:
      detailComponent = null
  }

  return (
    <>
      <LayerSelect
        currentLayer={layer}
        changeLayer={handleIconClick}
        setFeatureData={setFeatureData}
      />
      <Map
        onFeatureClick={handleFeatureClick}
        currentLayer={layer}
        oldLayer={oldLayer}
      />
      {detailComponent}
    </>
  )
}

export default HomePage
