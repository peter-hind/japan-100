import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Castle from '../../models/castle.ts'
import { getVisitorCastles, visitCastle } from '../api/castleApi.ts'

interface Props {
  featureData: Castle
}

function CastleDetails({ featureData }: Props) {
  const { user } = useAuth0()
  const queryClient = useQueryClient()

  const { data: castleList, isLoading } = useQuery({
    queryKey: ['currentcastles'],
    queryFn: () => getVisitorCastles(user?.sub as string),
  })

  const visitCastleMutation = useMutation({
    mutationFn: (castleId: number) =>
      visitCastle(user?.sub as string, castleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentcastles'] })
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
            <h2>Castle Details</h2>
            <div className="feature-container">
              <div className="feature-box">
                <div className="feature-icon">🏯</div>
                <h3>Castle Name:</h3>
                {featureData.name}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Prefecture:</h3>
                {featureData.prefecture}
              </div>
              <div className="feature-box">
                <div className="feature-icon">♻️</div>
                <h3>Ruined?</h3>
                {featureData.ruin_status == true
                  ? 'In Tatters'
                  : 'Still Standing!'}
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

                  {castleList?.some(
                    (castle: any) => Number(castle.castle_id) === featureData.id
                  ) ? (
                    <div className="feature-icon climbed">✅</div>
                  ) : (
                    <>
                      <div className="feature-icon not-climbed">❌</div>
                      <button
                        className="login-button"
                        onClick={() =>
                          visitCastleMutation.mutate(featureData.id)
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
        <h2>Select a Castle</h2>
      )}
    </div>
  )
}

export default CastleDetails
