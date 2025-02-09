import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortfolioProvider } from './context/PortfolioProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioProvider>
      <RouterProvider router={router}/>
    </PortfolioProvider>
    
  </StrictMode>,
)
