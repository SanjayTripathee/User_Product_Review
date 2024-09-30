//specefic user oly this file
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bUrl } from '../../constant'
import ProductDetailsUi from './ProductDetailsUi'

const ProductDetails = () => {
  let params = useParams()
  let [product,setproduct] = useState({})

  const getData =async ()=>{   
    //it will show all data in frontend of database means (help in hit api like postman )and it is call at useEffect hooks
   try {   
     let result = await axios({  
       url:`${bUrl}/product/${params.id}`,
       method:"GET"
     })
    //  console.log(result)
     setproduct(result.data.result)
   } catch (error) {
    
   }   
  }   

  useEffect(()=>{
    getData() 
  },[])
  // console.log(product)
  return (
    <div>
    <ProductDetailsUi product={product}/>
    </div>     
  )
}

export default ProductDetails  