import { useState, useEffect } from 'react'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import Mountain from '../../models/mountain.ts'
import { getMountain } from '../api/mountainApi.ts'
import MapFeature from '../../models/mapfeature.ts'
import MountainDetails from './MountainDetails.tsx'
import CastleDetails from './CastleDetails.tsx'
import Castle from '../../models/castle.ts'
import { getCastle } from '../api/castleApi.ts'
import OnsenDetails from './OnsenDetails.tsx'
import Onsen from '../../models/onsen.ts'
import { getOnsen } from '../api/onsenApi.ts'
import ShrineDetails from './ShrineDetails.tsx'
import BlossomDetails from './BlossomDetails.tsx'
import Shrine from '../../models/shrine.ts'
import Blossom from '../../models/blossom.ts'
import { getShrine } from '../api/shrineApi.ts'
import { getBlossom } from '../api/blossomApi.ts'

function HomePage() {
  const [layer, setLayer] = useState('')
  const [oldLayer, setOldLayer] = useState('')
  const [featureData, setFeatureData] = useState<
    Mountain | Castle | Onsen | Shrine | Blossom | null
  >(null)

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
      case '100-onsens':
        feature = await getOnsen(data.properties.title)
        break
      case '100-shrines':
        feature = await getShrine(data.properties.title)
        break
      case '100-blossoms':
        feature = await getBlossom(data.properties.title)
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
    case '100-onsens':
      detailComponent = <OnsenDetails featureData={featureData as Onsen} />
      break
    case '100-shrines':
      detailComponent = <ShrineDetails featureData={featureData as Shrine} />
      break
    case '100-blossoms':
      detailComponent = <BlossomDetails featureData={featureData as Blossom} />
      break
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
      <div className="map-details">
        <Map
          onFeatureClick={handleFeatureClick}
          currentLayer={layer}
          oldLayer={oldLayer}
        />
        {detailComponent}
      </div>
    </>
  )
}

export default HomePage
