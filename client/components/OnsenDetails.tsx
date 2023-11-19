import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Onsen from '../../models/onsen.ts'
import { getVisitorOnsens, visitOnsen } from '../api/onsenApi.ts'

interface Props {
  featureData: Onsen
}

function OnsenDetails({ featureData }: Props) {
  const { user } = useAuth0()
  const queryClient = useQueryClient()

  const { data: onsenList, isLoading } = useQuery({
    queryKey: ['currentonsens'],
    queryFn: () => getVisitorOnsens(user?.sub as string),
  })

  const visitOnsenMutation = useMutation({
    mutationFn: (springId: number) => visitOnsen(user?.sub as string, springId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentonsens'] })
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {featureData ? (
        <>
          <div className="details">
            <h2>Onsen Details</h2>
            <div className="feature-container">
              <div className="feature-box">
                <div className="feature-icon">♨️</div>
                <h3>Onsen Name:</h3>
                {featureData.name}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Prefecture:</h3>
                {featureData.prefecture}
              </div>
              <div className="feature-box">
                <div className="feature-icon">💪🏻</div>
                <h3>Benefits</h3>
                <ul>
                  {featureData.benefits
                    .split(',')
                    .map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>

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

                  {onsenList?.some(
                    (onsen: any) => Number(onsen.spring_id) === featureData.id
                  ) ? (
                    <div className="feature-icon climbed">✅</div>
                  ) : (
                    <>
                      <div className="feature-icon not-climbed">❌</div>
                      <button
                        className="login-button"
                        onClick={() =>
                          visitOnsenMutation.mutate(featureData.id)
                        }
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
        <h2>Select an Onsen</h2>
      )}
    </div>
  )
}

export default OnsenDetails
