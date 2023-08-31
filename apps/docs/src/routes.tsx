import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Layout from './pages/Layout'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/index', element: <Home /> },
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
      ],
    },
    { path: '/login', element: <Login /> },
  ])

  return routes
}

export default Routes
