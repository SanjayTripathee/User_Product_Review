import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReadAllUserUi from "./ReadAllUserUi";
import Swal from "sweetalert2";

const ReadAllUser = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  //  console.log(users)
  const getData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/user`,
        method: "GET",
      });
      // console.log(result)
      setUsers(result.data.result);   
    } catch (error) {}
  };   

  useEffect(() => {    
    getData();   
  }, []);
  // console.log(users);

  let handleView = (id) => {  
    return (e) => {
      navigate(`/user/${id}`);   
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
          url: `${bUrl}/user/${id}`,   
          method: "Delete",
        });
        getData()// we call it because it will show all data in frontend of database when delete data (it is inValidation)  
        toast.success(result.data.message);//toast show popup msg
      } catch (error) {
        toast.error(error.response.data.message);
      }
        }
      });
      
    };
  };

  // let handleUpdate = (id)=>{
  //     return (e)=>{
  //       navigate(`/user/update/${id}`);
  //     }
  // }

  // short cut of above just we make oneLine   
  let handleUpdate = (id)=>(e)=>{  navigate(`/user/update/${id}`);}
  return (
    <div>
     <ReadAllUserUi users={users} handleView={handleView} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  );  
};

export default ReadAllUser;  
