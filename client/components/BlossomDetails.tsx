import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Blossom from '../../models/blossom.ts'
import { getVisitorBlossoms, visitBlossom } from '../api/blossomApi.ts'

interface Props {
  featureData: Blossom
}

function BlossomDetails({ featureData }: Props) {
  const { user } = useAuth0()
  const queryClient = useQueryClient()

  const { data: blossomList, isLoading } = useQuery({
    queryKey: ['currentblossoms'],
    queryFn: () => getVisitorBlossoms(user?.sub as string),
  })

  const visitBlossomMutation = useMutation({
    mutationFn: (blossomId: number) =>
      visitBlossom(user?.sub as string, blossomId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentblossoms'] })
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
            <h2>Blossom Details</h2>
            <div className="feature-container">
              <div className="feature-box">
                <div className="feature-icon">🌸</div>
                <h3>Blossom Area:</h3>
                {featureData.name}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🗺️</div>
                <h3>Prefecture:</h3>
                {featureData.prefecture}
              </div>
              <div className="feature-box">
                <div className="feature-icon">🌳</div>
                <h3>Blossom Count</h3>
                {featureData.tree_count} Trees
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

                  {blossomList?.some(
                    (blossom: any) =>
                      Number(blossom.blossom_id) === featureData.id
                  ) ? (
                    <div className="feature-icon climbed">✅</div>
                  ) : (
                    <>
                      <div className="feature-icon not-climbed">❌</div>
                      <button
                        className="login-button"
                        onClick={() =>
                          visitBlossomMutation.mutate(featureData.id)
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
        <h2>Select a Blossom</h2>
      )}
    </div>
  )
}

export default BlossomDetails
