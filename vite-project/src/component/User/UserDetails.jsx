//specefic user oly this file
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bUrl } from '../../constant'
import UserDetailsUi from './UserDetailsUi'

const UserDetails = () => {
  let params = useParams()
  let [users,setUsers] = useState({})

  const getData =async ()=>{   
    //getData will show all data in frontend of database means (help in hit api like postman )and it is call at useEffect hooks
   try {   
     let result = await axios({  
       url:`${bUrl}/user/${params.id}`,
       method:"GET"
     })
     setUsers(result.data.result)  
   } catch (error) {
    
   }   
  }   

  useEffect(()=>{
    getData() 
  },[])
  // console.log(users)
  return (
    <div>
      <UserDetailsUi users={users}/>
    </div>     
  )
}

export default UserDetails  