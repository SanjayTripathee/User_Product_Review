import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavLinks = () => {
  return (
    <div>
         <NavLink to='/user' style={{marginRight:"20px"}}>User</NavLink>
        <NavLink  to='/user/create' style={{marginRight:"20px"}}>Create User</NavLink>
        <NavLink  to='/product' style={{marginRight:"20px"}}>Product</NavLink>
        <NavLink to='/product/create' style={{marginRight:"20px"}}>Create Product</NavLink>
        <NavLink to='/review' style={{marginRight:"20px"}}>Review</NavLink>
        <NavLink to='/review/create' style={{marginRight:"20px"}}>Create Review</NavLink>
    </div>
  )
}

export default MainNavLinks