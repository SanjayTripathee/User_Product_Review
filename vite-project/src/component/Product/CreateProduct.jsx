import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import axios from "axios";
import FormProductUi from "./FormProductUi";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [description, setDescription] = useState("");
  let [productImage, setproductImage] = useState("");

   // Reference for the file input
   const fileInputRef = useRef(null);
  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name, //name:name
      price,
      quantity,
      description,
      productImage,
    };
    try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "POST",
        data: data,
      });
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setName("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setproductImage("");
    fileInputRef.current.value = "";  // This clears the file input
   
  };
  return (
    <div>
      <FormProductUi
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
        description={description}
        setDescription={setDescription}
        productImage={productImage}
        setproductImage={setproductImage}
        handleSubmit={handleSubmit}
        buttonName="Register"
        ref={fileInputRef}
      />
    </div>
  );
};

export default CreateProduct;
