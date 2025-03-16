import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import LoginPage from './LoginPage.tsx'
import Test from './Test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LoginPage /> */}
    <Test></Test>
  </StrictMode>,
)
