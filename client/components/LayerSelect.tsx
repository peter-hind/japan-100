import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  currentLayer: string
  changeLayer: (newLayer: string) => void
}
function LayerSelect(props: Props) {
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
            mountainHovered
              ? '/image/mountain-colour.svg'
              : '/image/mountain-mono.svg'
          }
          alt="Bland Mountain Logo"
          onMouseOver={() => setMountainHovered(true)}
          onMouseOut={() => setMountainHovered(false)}
          onClick={() => {
            props.changeLayer('100-mountains')
          }}
        />
      </div>
      <div className="layer-icon">
        <img
          src={
            castleHovered
              ? '/image/castle-colour.svg'
              : '/image/castle-mono.svg'
          }
          alt="Bland Castle Logo"
          onMouseOver={() => setCastleHovered(true)}
          onMouseOut={() => setCastleHovered(false)}
        />
      </div>
      <div className="layer-icon">
        <img
          src={
            onsenHovered ? '/image/onsen-colour.svg' : '/image/onsen-mono.svg'
          }
          alt="Bland Onsen Logo"
          onMouseOver={() => setOnsenHovered(true)}
          onMouseOut={() => setOnsenHovered(false)}
        />
      </div>
      <div className="layer-icon">
        <img
          src={
            shrineHovered
              ? '/image/shrine-colour.svg'
              : '/image/shrine-mono.svg'
          }
          alt="Bland Shrine Logo"
          onMouseOver={() => setShrineHovered(true)}
          onMouseOut={() => setShrineHovered(false)}
        />
      </div>
      <div className="layer-icon">
        <img
          src={
            blossomHovered
              ? '/image/blossom-colour.svg'
              : '/image/blossom-mono.svg'
          }
          alt="Bland Blossom Logo"
          onMouseOver={() => setBlossomHovered(true)}
          onMouseOut={() => setBlossomHovered(false)}
        />
      </div>
    </div>
  )
}

export default LayerSelect
