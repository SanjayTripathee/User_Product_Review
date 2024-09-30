import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import FormUser from "./FormUser";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userImage, setUserImage] = useState("");

  // Reference for the file input
  const fileInputRef = useRef(null);

  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
      userImage,
    };
    // console.log(data)

    //hit api
    try {
      let result = await axios({
        url: `${bUrl}/user`,
        method: "POST",
        data: data, //it save all data in database(whatever we fill in form and click btn i.e Register Button)
      });
      //console.log(result)//result bhitra ko data ko msg aaucha...
      // console.log(result.data.message)
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    //to clear data after clicking  register btn
    setName("");
    setEmail("");
    setPassword("");
    setUserImage("");
  // Clear file input field using ref
    fileInputRef.current.value = "";  // This clears the file input
    
  };
  return (
    <div>
      <FormUser
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonName="Register"
        userImage={userImage}
        setUserImage={setUserImage}
        ref={fileInputRef} // Pass the ref to FormUser
      />
    </div>
  );
};

export default CreateUser;     
