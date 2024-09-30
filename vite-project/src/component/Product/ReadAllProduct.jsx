import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReadAllProductUi from './ReadAllProductUi';
import Swal from 'sweetalert2';

const ReadAllProduct = () => {
const [product, setProduct] = useState([])
let navigate = useNavigate();

const getData = async () => {
  try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "GET",
      });

      setProduct(result.data.result);   
  } catch (error) {
    
  }
  }; 


  useEffect(()=>{
    getData();
  },[])
  // console.log(product)

  let handleView = (id) => {
    return (e) => {
      navigate(`/product/${id}`);   
    };
  };

  let handleDelete = (id) => {
    return async (e) => {
      Swal.fire({
        title: "Are you sure you want to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
           try {
        let result = await axios({
          url: `${bUrl}/product/${id}`,   
          method: "Delete",
        });
        getData()//it will show all data in frontend of database when delete data (it is inValidation) if we dont all it then data will delte in database not shown in fronted weather it id delete or not
        toast.success(result.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
        }
      });
    };
  };
  
  let handleUpdate = (id)=>(e)=>{  navigate(`/product/update/${id}`);}//short cut of above just we make oneline
  return (
    <div>
      <ReadAllProductUi product={product} handleView={handleView} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  )
}

export default ReadAllProduct