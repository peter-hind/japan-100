import { ImageSource } from 'mapbox-gl'
import React, { useState } from 'react'

interface ImageGrid {
  images: Image[]
  onSelect: (selectedImage: Image) => void
}

function ImageGrid({ images, onSelect }: ImageGrid) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  function handleImageClick(image: Image) {
    setSelectedImage(image)
    onSelect(image)
  }

  return (
    <div className="image-grid">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.alt}
          className={
            selectedImage && selectedImage.id === image.id ? 'selected' : ''
          }
          onClick={() => handleImageClick(image)}
        />
      ))}
    </div>
  )
}

export default ImageGrid
