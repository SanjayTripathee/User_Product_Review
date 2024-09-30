import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReadReviewByIdQuery, useUpdateReviewMutation } from "../../services/reviewService";
import DynamicReviewForm from "./DynamicReviewForm";
// import { useReadReviewByIdQuery, useUpdateReviewMutation } from "../../services/api/reviewService";
// import DynamicReviewForm from "./DynamicReviewForm";

const updateReview = () => {
  let params = useParams();
  let navigate = useNavigate();
  let id = params.id;
  let [
    updateReview,
    {
      isError: isErrorUpdateData,
      isSuccess: isSuccessUpdateData,
      isLoading: isLoadingUpdateData,
      data: dataUpdateData,
      error: errorUpdateData,
    },
  ] = useUpdateReviewMutation();

  let {
    isError: isErrorUpdateSpeceficData,
    isSuccess: isSuccessUpdateSpeceficData,
    isLoading: isLoadingUpdateSpeceficData,
    data: dataUpdateSpeceficData,
    error: errorUpdateSpeceficData,
  } = useReadReviewByIdQuery(params.id);

  let review = dataUpdateSpeceficData?.result || {};

  useEffect(() => {
    if (isSuccessUpdateData) {
      console.log("sucessfully updated");
    }
  }, [isSuccessUpdateData]);

  useEffect(() => {
    if (isErrorUpdateData) {
      console.log(errorUpdateData?.error);
    }
  }, [isErrorUpdateData, errorUpdateData]);

  useEffect(() => {
    if (isErrorUpdateSpeceficData) {
      console.log(errorUpdateSpeceficData?.error);
    }
  }, [isErrorUpdateSpeceficData, errorUpdateSpeceficData]);

  let onSubmit = async (values, other) => {
    // hit api
    let body = values;
    updateReview({ id: id, body: values });
    navigate(`/review/${id}`);
  };

  return (
    <div>
      <DynamicReviewForm
        buttonName="Update Review"
        onSubmit={onSubmit}
        review={review}
        title="Update Review"
        isLoading={isLoadingUpdateData}
      />
    </div>
  );
};

export default updateReview;
