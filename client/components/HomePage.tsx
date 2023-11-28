import { useState } from 'react'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import MapFeature from '../../models/mapfeature.ts'
import { getFeature } from '../api/featureApi.ts'
import FeatureDetails from './FeatureDetails.tsx'
import Feature from '../../models/Ifeature.ts'
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../api/apiClient.ts'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import ListView from './ListView.tsx'

interface Props {
  mapView: boolean
  listView: boolean
}

function HomePage({ mapView }: Props) {
  const [layer, setLayer] = useState('')
  const [oldLayer, setOldLayer] = useState('')
  const [featureData, setFeatureData] = useState<Feature | null>(null)
  const [lng, setLng] = useState(136.068)
  const [lat, setLat] = useState(38.4968)
  const [zoom, setZoom] = useState(4.7)
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading } = useAuth0()

  const {
    data: allUsers,
    isError,
    isLoading: isPending,
  } = useQuery({ queryKey: ['authusers'], queryFn: () => getAllUsers() })
  if (isError) {
    console.log('isError')
    return <div>There was an error getting all profiles...</div>
  }

  if (!allUsers || isPending) {
    console.log('isPending')
    return <div>Loading all profiles...</div>
  }

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

  if (
    isAuthenticated &&
    allUsers?.some((profile) => profile.auth0Id === user?.sub)
  ) {
    console.log('User authenticated:', user)
  } else if (isAuthenticated) {
    console.log('Redirecting to /complete-profile', allUsers)
    navigate('/complete-profile')
  }

  return (
    <>
      <LayerSelect
        currentLayer={layer}
        changeLayer={handleIconClick}
        setFeatureData={setFeatureData}
      />
      {mapView === true ? (
        <div className="map-details">
          <Map
            onFeatureClick={handleFeatureClick}
            currentLayer={layer}
            oldLayer={oldLayer}
            lng={lng}
            lat={lat}
            zoom={zoom}
          />
          <FeatureDetails featureData={featureData} layer={layer} />
        </div>
      ) : (
        <ListView layer={layer} />
      )}
    </>
  )
}

export default HomePage
