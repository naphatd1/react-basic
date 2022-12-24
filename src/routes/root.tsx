import { createBrowserRouter } from 'react-router-dom'
import routeDashbord from './dashbord'
import MainRoute from './mainRoute'

const router = createBrowserRouter([...MainRoute, ...routeDashbord])
export default router
