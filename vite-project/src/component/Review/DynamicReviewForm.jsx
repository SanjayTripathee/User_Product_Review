import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bUrl } from "../../constant";
import { reviewValidationSchema } from "../../validation";
import FormikSelect from "../formikField/FormikSelect";
import FormikTextArea from "../formikField/FormikTextArea";

const DynamicReviewForm = ({
  buttonName = "",
  onSubmit = () => {},
  review = {},
  title = "",
  isLoading = false,
}) => {
  let params = useParams();
  const [product, setProduct] = useState([]); // Initialize product state
  const [user, setUser] = useState([]); // Initialize product state

  let porductOption = product?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  let initialValues = {
    user: user[1]?._id,
    product: product[1]?._id,
    description: review.description || "",
  };
  const getProductData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/product`,
        method: "GET",
      });
      // console.log(result);
      setProduct(result.data.result);
    } catch (error) {}
  };

  const getuserData = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/user`,
        method: "GET",
      });
      // console.log(result);
      setUser(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getProductData();
    getuserData();
  }, []);


  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {title}
      </h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={reviewValidationSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <FormikTextArea
                  name="description"
                  label="Description:"
                  placeholder="Enter review description"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    minHeight: "150px",
                  }}
                  onChange={(e) =>
                    formik.setFieldValue("description", e.target.value)
                  }
                />
              </div>

              <FormikSelect
                name="product"
                label="Product"
                onChange={(e) => {
                  formik.setFieldValue("product", e.target.value);
                }}
                options={porductOption}
              />

              <FormikSelect
                name="user"
                label="user"
                onChange={(e) => {
                  formik.setFieldValue("user", e.target.value);
                }}
                options={user?.map((item) => ({
                  value: item._id, // use product _id for value
                  label: item.name, // use product name for label
                }))}
              />

              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div>{buttonName}.....</div>
                  ) : (
                    <div>{buttonName}</div>
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DynamicReviewForm;
