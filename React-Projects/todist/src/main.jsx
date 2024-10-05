import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import { store } from './redux/store.js';  // Import the store

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* wrap app with provider */}
    <App />
  </Provider>,
)
