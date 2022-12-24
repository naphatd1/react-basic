import { RouteObject } from 'react-router-dom'
import DLayout from '../pages/dashbord/d-layout'
import DHome from '../pages/dashbord/d-home'
import DRoom from '../pages/dashbord/d-room'

const routeDashbord: RouteObject[] = [
  {
    path: '/dashbord',
    element: <DLayout />,
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
