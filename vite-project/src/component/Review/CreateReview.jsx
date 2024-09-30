import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DynamicReviewForm from "./DynamicReviewForm";
import { useCreateReviewMutation } from "../../services/reviewService";


const CreateReview = () => {
  let navigate = useNavigate();
  let [
    createReview,
    {
      isError: isErrorCreateData,
      isSuccess: isSuccessCreateData,
      isLoading: isLoadingCreateData,
      error: errorCreateData,
    },
  ] = useCreateReviewMutation();

  useEffect(() => {
    if (isSuccessCreateData) {
      console.log("sucessfully created");
      navigate("/review");
    }
  }, [isSuccessCreateData]);

  useEffect(() => {
    if (isErrorCreateData) {
      console.log(errorCreateData?.error);
    }
  }, [isErrorCreateData, errorCreateData]);

  let onSubmit = async (values, other) => {
    // hit api
    let body = values;
    createReview(body);
    console.log(values)
  };

  return (
    <div>
      <DynamicReviewForm
        buttonName="Creact Review"
        onSubmit={onSubmit}
        title="Create Review"
        isLoading={isLoadingCreateData}
      />
    </div>
  );
};

export default CreateReview;
