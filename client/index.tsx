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
        domain="manaia-2023-pete.au.auth0.com"
        clientId="AuMU2cLU4t5JULgPP5JyV8SZlStfjeDl"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: 'https://japan-completionist/api',
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
