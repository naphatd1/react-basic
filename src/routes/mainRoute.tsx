import { RouteObject } from 'react-router-dom'
import HomePage from '../pages/home-page'
import AboutPage from '../pages/about-page'
import LoginPage from '../pages/login-page'

const MainRoute: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]
export default MainRoute
