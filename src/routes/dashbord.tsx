import { RouteObject, redirect } from 'react-router-dom'
import DLayout from '../pages/dashbord/d-layout'
import DHome from '../pages/dashbord/d-home'
import DRoom from '../pages/dashbord/d-room'
import { getProfile } from '../services/auth-service'

const routeDashbord: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DLayout />,
    loader: async () => {
      const response = await getProfile()
      if (!response?.data.data.user) {
        throw redirect('/login')
      }
      return response.data.data.user
    },
    children: [
      {
        path: '',
        element: <DHome />,
      },
      {
        path: 'room',
        element: <DRoom />,
      },
    ],
  },
]

export default routeDashbord
