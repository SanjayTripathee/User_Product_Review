import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../../PageNotFound'
import UserRouter from './UserRouter'
import ProductRouter from './ProductRouter'
import ReviewRouter from './ReviewRouter'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/user/*' element={<UserRouter/>}></Route> {/*  * means it can be anythings */}     
        <Route path='/product/*' element={<ProductRouter/>}></Route>      
        <Route path='/review/*' element={<ReviewRouter/>}></Route> 
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>       
  
      </Routes>
    </div>
  )
}

export default MainRoute  

