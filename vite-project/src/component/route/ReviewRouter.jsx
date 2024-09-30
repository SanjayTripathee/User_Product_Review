import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateReview from '../Review/CreateReview'
import ReadAllReview from '../Review/ReadAllReview'
import ReviewDetails from '../Review/ReviewDetails'
import UpdateReview from '../Review/UpdateReview'

const ReviewRouter = () => {
  return (
    <div>
       <Routes>
      <Route path='/create' element={<CreateReview/>}></Route>
        <Route path='/' element={<ReadAllReview/>}></Route>
        <Route path='/:id' element={<ReviewDetails/>}></Route>
        <Route path='/update/:id' element={<UpdateReview/>}></Route>
      </Routes>
    </div>
  )
}

export default ReviewRouter