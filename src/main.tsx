import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store'

// import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import './global.css'
import router from './routes/root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  // {/* </React.StrictMode> */}
)
