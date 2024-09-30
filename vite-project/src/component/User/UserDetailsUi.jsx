import React from 'react'

const UserDetailsUi = ({users}) => {
  return (
    <div>
     {/* specefic user only i.e 1 user datail so, we dont use map here ok.. */}    
      <p>Email: {users.email}</p>
      <p>name: {users.name}</p>
      <p>password: {users.password}</p>  
      {users.userImage && (<img src={users.userImage} alt="user" style={{ width: "200px" ,height:"200px"}} />)} 
    </div>
  )
}

export default UserDetailsUi
