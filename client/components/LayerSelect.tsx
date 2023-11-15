import { Dispatch, SetStateAction, useState } from 'react'
import { cursorTo } from 'readline'

interface Props {
  currentLayer: string
  changeLayer: (newLayer: string) => void
  setFeatureData: Dispatch<SetStateAction<any>>
}
function LayerSelect({ currentLayer, changeLayer, setFeatureData }: Props) {
  const [mountainHovered, setMountainHovered] = useState(false)
  const [castleHovered, setCastleHovered] = useState(false)
  const [onsenHovered, setOnsenHovered] = useState(false)
  const [shrineHovered, setShrineHovered] = useState(false)
  const [blossomHovered, setBlossomHovered] = useState(false)

  return (
    <div className="layer-select">
      <div className="layer-icon">
        <img
          src={
            mountainHovered || currentLayer === '100-mountains'
              ? '/image/mountain-colour.svg'
              : '/image/mountain-mono.svg'
          }
          alt="Bland Mountain Logo"
          onMouseOver={() => setMountainHovered((prev) => !prev)}
          onMouseOut={() => setMountainHovered((prev) => !prev)}
          onClick={() => {
            changeLayer('100-mountains')
            setFeatureData(null)
          }}
        />
        <h3>Mountains</h3>
      </div>
      <div className="layer-icon">
        <img
          src={
            castleHovered || currentLayer === '100-castles'
              ? '/image/castle-colour.svg'
              : '/image/castle-mono.svg'
          }
          alt="Bland Castle Logo"
          onMouseOver={() => setCastleHovered((prev) => !prev)}
          onMouseOut={() => setCastleHovered((prev) => !prev)}
          onClick={() => {
            changeLayer('100-castles')
            setFeatureData(null)
          }}
        />
        <h3>Castles</h3>
      </div>
      <div className="layer-icon">
        <img
          src={
            onsenHovered ? '/image/onsen-colour.svg' : '/image/onsen-mono.svg'
          }
          alt="Bland Onsen Logo"
          onMouseOver={() => setOnsenHovered((prev) => !prev)}
          onMouseOut={() => setOnsenHovered((prev) => !prev)}
        />
        <h3>Onsen</h3>
      </div>
      <div className="layer-icon">
        <img
          src={
            shrineHovered
              ? '/image/shrine-colour.svg'
              : '/image/shrine-mono.svg'
          }
          alt="Bland Shrine Logo"
          onMouseOver={() => setShrineHovered((prev) => !prev)}
          onMouseOut={() => setShrineHovered((prev) => !prev)}
        />
        <h3>Shrines</h3>
      </div>
      <div className="layer-icon">
        <img
          src={
            blossomHovered
              ? '/image/blossom-colour.svg'
              : '/image/blossom-mono.svg'
          }
          alt="Bland Blossom Logo"
          onMouseOver={() => setBlossomHovered((prev) => !prev)}
          onMouseOut={() => setBlossomHovered((prev) => !prev)}
        />
        <h3>Blossoms</h3>
      </div>
    </div>
  )
}

export default LayerSelect
