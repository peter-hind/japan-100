import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Map from './Map.tsx'
import LayerSelect from './LayerSelect.tsx'
import Mountain from '../../models/mountain.ts'

function HomePage() {
  const [layer, setLayer] = useState('')
  const [featureData, setFeatureData] = useState<Mountain | null>(null)

  const handleIconClick = (newLayer: string) => {
    setLayer(newLayer)
  }

  return (
    <>
      <LayerSelect currentLayer={layer} changeLayer={handleIconClick} />
      <Map
        onFeatureClick={function (data: any): void {
          throw new Error('Function not implemented.')
        }}
        currentLayer={layer}
      />
    </>
  )
}

export default HomePage
