import { useState, useEffect, useRef } from 'react'

import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic29qb2JvNDciLCJhIjoiY2xmZ2RnYjhuMHZ4dDNycGRma2FjOXd1NSJ9.tCJRJZhcFmneyT6Tp4ZJOg'

type MapContainerRef = HTMLDivElement | null

interface Props {
  onFeatureClick: (data: any) => void
  currentLayer: string
}

function Map(props: Props) {
  const mapContainer = useRef<MapContainerRef>(null)
  const map = useRef<MapboxMap | null>(null)
  const [lng, setLng] = useState(136.068)
  const [lat, setLat] = useState(38.4968)
  const [zoom, setZoom] = useState(4.7)

  console.log('line 22', props.currentLayer)
  useEffect(() => {
    console.log('line 24', props.currentLayer)
    if (props.currentLayer !== '') {
      console.log('hello')
      map.current?.on('idle', () =>
        map.current?.setLayoutProperty(
          props.currentLayer,
          'visibility',
          'visible'
        )
      )
      console.log(props.currentLayer)
    }
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: 'mapContainerId',
        style: 'mapbox://styles/sojobo47/clopj6itg004t01r64xzdb4y0',
        center: [lng, lat],
        zoom: zoom,
      })

      map.current.on('move', () => {
        if (map.current) {
          setLng(parseFloat(map.current.getCenter().lng.toFixed(4)))
          setLat(parseFloat(map.current.getCenter().lat.toFixed(4)))
          setZoom(parseFloat(map.current.getZoom().toFixed(2)))
        }
      })
      map.current.on('click', `${props.currentLayer}`, function (e) {
        if (e.features && e.features.length) {
          const feature: any = e.features[0]
          console.log(feature)
          props.onFeatureClick(feature)
          const coordinates = feature.geometry.coordinates
          console.log(coordinates)
          map.current?.flyTo({
            center: coordinates,
            zoom: 12,
            pitch: 75,
            speed: 0.8,
            curve: 1,
          })
        } else {
          // Handle the case when no features are found
          console.log('No features found at this point.')
        }
      })
    }
  }, [lat, lng, zoom, props])

  return (
    <>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div
        ref={mapContainer}
        className="map-container"
        id="mapContainerId"
      ></div>
    </>
  )
}

export default Map
