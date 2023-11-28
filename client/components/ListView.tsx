import { useQuery } from '@tanstack/react-query'
import { getFeatures, getVisitorFeatures } from '../api/featureApi'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  layer: string
}
function ListView({ layer }: Props) {
  const { user } = useAuth0()

  const type = layer.slice(0, -4)
  const featureType = type.charAt(0).toUpperCase() + type.slice(1)

  const { data: allFeatures } = useQuery({
    queryKey: [`${layer}features`],
    queryFn: () => getFeatures(layer),
  })

  const {
    data: featureList,
    isError: isError2,
    isLoading: isLoading2,
  } = useQuery({
    queryKey: [`current${layer}`],
    queryFn: () => getVisitorFeatures(layer, user?.sub as string),
  })
  if (isError2) {
    return <div>There was an error getting all visited places...</div>
  }
  if (!featureList || isLoading2) {
    return <div>Loading visited places...</div>
  }

  return (
    <>
      <h1>{featureType} List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Prefecture</th>
            <th>Visited</th>
          </tr>
        </thead>
        <tbody>
          {allFeatures &&
            allFeatures.map((feature) => (
              <tr key={feature.id}>
                <td>{feature.name}</td>
                <td>{feature.description}</td>
                <td>{feature.prefecture}</td>

                {featureList?.some(
                  (visit: any) => Number(visit.feature_id) === feature.id
                ) ? (
                  <td className="feature-icon">✅</td>
                ) : (
                  <td className="feature-icon">❌</td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default ListView
