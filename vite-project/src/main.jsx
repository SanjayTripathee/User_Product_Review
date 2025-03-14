import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./css/createUser.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';//import css of toastify from its document ok..
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(

 /* reducer store */
 <Provider store={store}>
 <BrowserRouter>
   <ToastContainer />
   <App />
 </BrowserRouter>
</Provider>
  

)
