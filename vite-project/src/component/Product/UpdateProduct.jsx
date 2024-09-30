import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import FormProductUi from './FormProductUi';
import { bUrl } from '../../constant';




const UpdateProduct = () => {
  let [name,setName] = useState("")
  let [price,setPrice] = useState()
  let [quantity,setQuantity] = useState()
  let [description,setDescription] = useState("")
  let [productImage,setproductImage] = useState("")
  
  let params = useParams()
  let navigate = useNavigate()

  const getData = async ()=>{
   try {
     let result = await axios({  
       url:`${bUrl}/product/${params.id}`,
       method:"GET"
     })
    //  console.log(result)
     let data = result.data.result
     setName(data.name)
     setPrice(data.price)
     setQuantity(data.quantity)
     setDescription(data.description)
     setproductImage(data.productImage)
   } catch (error) {
    
   }
  }

  let handleSubmit = async (e)=>{
    e.preventDefault();
    let data = {
      name,
      price,
      quantity,
      description,
      productImage,    
    }
    // console.log(data)
    
   //hit api
    try {
      let result = await axios({
        url:`${bUrl}/product/${params.id}`,   
        method:"Patch",
        data:data,
      })
      // console.log(result.data.message)
      navigate(`/product/${params.id}`) 
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
       <FormProductUi name={name} setName={setName} price={price} setPrice={setPrice} quantity={quantity}
      setQuantity={setQuantity} description={description} setDescription={setDescription} productImage={productImage} 
      setproductImage={setproductImage} handleSubmit={handleSubmit}
       buttonName="update"
       />
    </div>
  )
}

export default UpdateProduct

