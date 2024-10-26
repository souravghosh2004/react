import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from  'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/home/Home.jsx'
import About from './component/about/Abou.jsx'
import Contact from './component/contact/Contact.jsx'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
    
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
