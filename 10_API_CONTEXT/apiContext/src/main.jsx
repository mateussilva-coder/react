import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import './index.css'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
      <RouterProvider router={router}/>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>
)