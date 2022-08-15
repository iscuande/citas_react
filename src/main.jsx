import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './dist/output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode> FUE DESCATIVADO PORQUE CREABA CONLFICTO CON LOCALSTORAGE y al actualizar se borraban datos
    <App />
  //</React.StrictMode>
)
