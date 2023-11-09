// import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>homepage</h2>
  },
  {
    path: '/music',
    element: <h2>music</h2>
  },
  {
    path: '/videos',
    element: <h2>videos</h2>
  },
  {
    path: '/live',
    element: <h2>live</h2>
  },
  {
    path: '/merch',
    element: <h2>merch</h2>
  },
])

function App() {
  return <RouterProvider router={router} />
};

export default App
