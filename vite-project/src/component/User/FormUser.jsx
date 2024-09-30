//ui

import axios from "axios";
import React, { forwardRef } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";

const FormUser = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  buttonName,
  userImage,
  setUserImage,
},ref) => {
  const handleImage = async (e) => {
    // console.log(e.target.files[0]);
    let data = new FormData();//syntax
    data.append("file", e.target.files[0]);//syntax
    
    try {
      let result = await axios({
        url: `${bUrl}/file/single`,
        method: "post",
        data: data,   
      })
      // console.log(result)
      setUserImage(result.data.result)
    } catch (error) {
      toast.error(error.response.data.message)  
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="emil"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label htmlFor="password">password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="userImage">User Image:</label>
            {/* don't give value props to the input.give type ="file"  i.e value={} will not work in type = 'file */}
            <input id="userImage" type="file" onChange={handleImage}   ref={ref}/>
            { userImage && (<img src={userImage} alt="user" style={{ width: "200px" ,height:"200px"}} />)}
          </div>

        </div>

        <div>
          <button type="submit">{buttonName}</button>
        </div>       
      </form>
    </div>
  );
};

export default  forwardRef(FormUser);
