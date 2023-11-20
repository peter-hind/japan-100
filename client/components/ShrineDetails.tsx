import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Shrine from '../../models/shrine.ts'
import { getVisitorShrines, visitShrine } from '../api/shrineApi.ts'

interface Props {
  featureData: Shrine
}

function ShrineDetails({ featureData }: Props) {
  const { user } = useAuth0()
  const queryClient = useQueryClient()

  const { data: shrineList, isLoading } = useQuery({
    queryKey: ['currentshrines'],
    queryFn: () => getVisitorShrines(user?.sub as string),
  })

  const visitShrineMutation = useMutation({
    mutationFn: (shrineId: number) =>
      visitShrine(user?.sub as string, shrineId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentshrines'] })
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
            <h2>Shrine Details</h2>
            <div className="feature-container">
              <div className="feature-box">
                <div className="feature-icon">⛩️</div>
                <h3>Shrine Name:</h3>
                {featureData.name}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Prefecture:</h3>
                {featureData.prefecture}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🙏🏻</div>
                <h3>Enshrined Kami</h3>
                <ul>
                  {featureData.kami
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

                  {shrineList?.some(
                    (shrine: any) => Number(shrine.shrine_id) === featureData.id
                  ) ? (
                    <div className="feature-icon climbed">✅</div>
                  ) : (
                    <>
                      <div className="feature-icon not-climbed">❌</div>
                      <button
                        className="login-button"
                        onClick={() =>
                          visitShrineMutation.mutate(featureData.id)
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
        <h2>Select a Shrine</h2>
      )}
    </div>
  )
}

export default ShrineDetails
