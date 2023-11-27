import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Feature from '../../models/Ifeature.ts'
import {
  getVisitorFeatures,
  visitFeature,
  resetFeature,
} from '../api/featureApi.ts'

interface Props {
  featureData: Feature | null
  layer: string
}

function FeatureDetails({ featureData, layer }: Props) {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()
  console.log(featureData)

  const { data: featureList, isLoading } = useQuery({
    queryKey: [`current${layer}`],
    queryFn: () => getVisitorFeatures(layer, user?.sub as string),
  })

  console.log(featureList)

  const visitFeatureMutation = useMutation({
    mutationFn: visitFeature,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`current${layer}`] })
    },
  })

  const resetFeatureMutation = useMutation({
    mutationFn: resetFeature,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`current${layer}`] })
    },
  })

  async function handleVisitClick() {
    const token = await getAccessTokenSilently()
    console.log(token)
    visitFeatureMutation.mutate({
      layer: layer,
      feature: featureData?.id as number,
      token: token,
    })
  }

  async function handleResetClick() {
    const token = await getAccessTokenSilently()
    console.log(token)
    resetFeatureMutation.mutate({
      layer: layer,
      feature: featureData?.id as number,
      token: token,
    })
  }

  const type = layer.slice(0, -4)
  const featureType = type.charAt(0).toUpperCase() + type.slice(1)

  let featureIcon

  switch (type) {
    case 'mountain':
      featureIcon = '⛰️'
      break
    case 'castle':
      featureIcon = '🏯'
      break
    case 'blossom':
      featureIcon = '🌸'
      break
    case 'onsen':
      featureIcon = '♨️'
      break
    case 'shrine':
      featureIcon = '⛩️'
      break
    default:
      null
  }

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  if (layer === '') {
    return (
      <div className="details">
        <h2>Choose a list</h2>
      </div>
    )
  }
  return (
    <div>
      {featureData ? (
        <>
          <div className="details">
            <h2>{featureType} Details</h2>
            <div className="feature-container">
              <div className="feature-box">
                <div className="feature-icon">{featureIcon}</div>
                <h3>{featureType} Name:</h3>
                {featureData.name}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Prefecture:</h3>
                {featureData.prefecture}
              </div>
              {type === 'mountain' ? (
                <div className="feature-box">
                  <div className="feature-icon">🔝</div>
                  <h3>Elevation:</h3>
                  {featureData.elevation_m}m
                </div>
              ) : null}
              {type === 'castle' ? (
                <div className="feature-box">
                  <div className="feature-icon">♻️</div>
                  <h3>Ruined?</h3>
                  {featureData.ruin_status == true
                    ? 'In Tatters'
                    : 'Still Standing!'}
                </div>
              ) : null}
              {type === 'blossom' ? (
                <div className="feature-box">
                  <div className="feature-icon">🌳</div>
                  <h3>Tree Count</h3>
                  {featureData.tree_count} Trees
                </div>
              ) : null}
              {type === 'onsen' ? (
                <div className="feature-box">
                  <div className="feature-icon">💪🏻</div>
                  <h3>Benefits</h3>
                  <ul>
                    {featureData.benefits
                      ? featureData.benefits
                          .split(',')
                          .map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))
                      : null}
                  </ul>
                </div>
              ) : null}
              {type === 'shrine' ? (
                <div className="feature-box">
                  <div className="feature-icon">🙏🏻</div>
                  <h3>Enshrined Kami</h3>
                  <ul>
                    {featureData.kami
                      ? featureData.kami
                          .split(',')
                          .map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))
                      : null}
                  </ul>
                </div>
              ) : null}

              <div className="feature-box">
                <div className="feature-icon">📒</div>
                <h3>Description:</h3>
                <p className="description">{featureData.description}</p>
              </div>
            </div>
            {user ? (
              <div>
                <div className="checkoff-box">
                  <h3>Visited?</h3>

                  {featureList?.some(
                    (feature: any) =>
                      Number(feature.feature_id) === featureData.id
                  ) ? (
                    <>
                      <div className="feature-icon visited">✅</div>
                      <button
                        className="login-button"
                        onClick={handleResetClick}
                      >
                        Reset?
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="feature-icon not-visited">❌</div>
                      <button
                        className="login-button"
                        onClick={handleVisitClick}
                      >
                        Visited?
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <h2>Choose a {featureType}</h2>
      )}
    </div>
  )
}

export default FeatureDetails
