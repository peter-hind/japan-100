import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-r1zsuix7xzbvrtu2.us.auth0.com"
      clientId="wzV7qJy2w8puLhWwMsKQV783nDCWABou"
      authorizationParams={{
        redirect_uri: 'http://localhost:5173',
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  )
})
