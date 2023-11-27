interface Feature {
  id: number
  name: string
  prefecture: string
  tree_count?: number
  ruin_status?: boolean
  elevation_m?: number
  benefits?: string
  kami?: string
  description: string
  geojson: string
}

export default Feature
