import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
const router = createBrowserRouter(routes)
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="dev-r1zsuix7xzbvrtu2.us.auth0.com"
        clientId="wzV7qJy2w8puLhWwMsKQV783nDCWABou"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
