import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './routes/About'
import Contact from './routes/Contact'
import Request from './routes/Request'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/request",
    element: <Request />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
