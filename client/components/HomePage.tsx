import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'

function HomePage() {
  return (
    <>
      <LayerSelect />
      <Map
        onFeatureClick={function (data: any): void {
          throw new Error('Function not implemented.')
        }}
        layer={''}
      />
    </>
  )
}

export default HomePage
