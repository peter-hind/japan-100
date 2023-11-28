import { useState, useEffect, useRef } from 'react'
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'
import { Feature } from '../../models/feature'

mapboxgl.accessToken =
  'pk.eyJ1Ijoic29qb2JvNDciLCJhIjoiY2xmZ2RnYjhuMHZ4dDNycGRma2FjOXd1NSJ9.tCJRJZhcFmneyT6Tp4ZJOg'

type MapContainerRef = HTMLDivElement | null
interface Props {
  onFeatureClick: (data: any) => void
  currentLayer: string
  oldLayer: string
  lng: number
  lat: number
  zoom: number
}

function Map({
  onFeatureClick,
  currentLayer,
  oldLayer,
  lng,
  lat,
  zoom,
}: Props) {
  const mapContainer = useRef<MapContainerRef>(null)
  const map = useRef<MapboxMap | null>(null)

  const hasClickListener = useRef(false)

  useEffect(() => {
    const clickListener = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
      if (e.features && e.features.length) {
        const feature: Feature = e.features[0]
        console.log(feature)
        onFeatureClick(feature)
        const coordinates = feature.geometry.coordinates
        console.log(coordinates)
        map.current?.flyTo({
          center: [coordinates[0], coordinates[1]],
          zoom: 12,
          pitch: 75,
          speed: 0.8,
          curve: 1,
        })
      }
    }

    if (!hasClickListener.current) {
      map.current?.on('click', currentLayer, clickListener)
      hasClickListener.current = true
    }

    return () => {
      map.current?.off('click', currentLayer, clickListener)
      hasClickListener.current = false
    }
  }, [currentLayer])

  useEffect(() => {
    if (currentLayer !== '') {
      console.log(currentLayer)
      console.log(oldLayer)
      map.current?.on(
        'idle',
        () =>
          oldLayer !== '' &&
          oldLayer !== currentLayer &&
          map.current?.setLayoutProperty(oldLayer, 'visibility', 'none')
      )
      map.current?.on('idle', () =>
        map.current?.setLayoutProperty(currentLayer, 'visibility', 'visible')
      )
    }

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: 'mapContainerId',
        style: 'mapbox://styles/sojobo47/clopj6itg004t01r64xzdb4y0',
        center: [lng, lat],
        zoom: zoom,
      })
    }
  })

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
