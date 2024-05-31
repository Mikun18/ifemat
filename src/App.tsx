import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/homepage'
import GraphPage from './pages/graphPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/graph",
      element: <GraphPage />
    }
  ])
  return (
   <div>
      <RouterProvider router={router} />
   </div>
  )
}

export default App
