import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { bUrl } from '../../constant';
import FormUser from './FormUser';
import { useNavigate, useParams } from 'react-router-dom';




const UpdateUser = () => {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("") 
  let [userImage,setUserImage] = useState("")    
  
  let params = useParams()
  let navigate = useNavigate()

  const getData = async ()=>{
   try {
     let result = await axios({  
       url:`${bUrl}/user/${params.id}`,
       method:"GET"
     })
    //  console.log(result)
     let data = result.data.result
     setName(data.name)
     setEmail(data.email)
     setPassword(data.password)
     setUserImage(data.userImage)
   } catch (error) {
    
   }
  }

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      name,
      email,
      password,
      userImage,
    }
    // console.log(data)
    
   //hit api
    try {
      let result = await axios({
        url:`${bUrl}/user/${params.id}`,   
        method:"Patch",
        data:data,
      })
      // console.log(result.data.message)
      navigate(`/user/${params.id}`) 
      toast.success(result.data.message)   
    } catch (error) {
      toast.error(error.response.data.message)  
    }
    //to clear data after clicking  register btn
  

  }

  useEffect(()=>{
    getData() 
  },[])
  return (
    <div>
    <FormUser name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleSubmit}
       buttonName="Update" userImage={userImage} setUserImage={setUserImage} />
    </div>
  )
}

export default UpdateUser

