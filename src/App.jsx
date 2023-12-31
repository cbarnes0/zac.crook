// import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Error, Live, Merch, Music, Videos, Landing } from './pages'
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'music',
        element: <Music />,
      },
      {
        path: 'videos',
        element: <Videos />
      },
      {
        path: 'live',
        element: <Live />
      },
      {
        path: 'merch',
        element: <Merch />
      },
      {
        path: 'error',
        element: <Error />
      },
    ]
  },

])

const App = () => {
  return <RouterProvider router={router} />
};

export default App
