import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import  {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'
import {store } from "./redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>
    </BrowserRouter> 
  </React.StrictMode>
)
