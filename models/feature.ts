export interface Feature {
  type: string
  state: State
  geometry: Geometry
  properties: Properties
  id: number
  layer: Layer
  source: string
  sourceLayer: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Layer {
  id: string
  type: string
  source: string
  'source-layer': string
  layout: Layout
  paint: Paint
}

export interface Layout {
  'text-size': number
  'icon-text-fit': string
  'icon-image': string
  'icon-anchor': string
  'text-font': string[]
  'text-justify': string
  'text-offset': number[]
  'icon-size': number
  'text-anchor': string
  'text-field': TextField
}

export interface TextField {
  sections: Section[]
}

export interface Section {
  text: string
  image: null
  scale: null
  fontStack: null
  textColor: null
}

export interface Paint {
  'text-color': TextColor
  'icon-opacity': number
}

export interface TextColor {
  r: number
  g: number
  b: number
  a: number
}

export interface Properties {
  description: string
  elevation: number
  title: string
}

export interface State {}
