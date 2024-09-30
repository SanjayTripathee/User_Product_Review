import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReadReviewByIdQuery } from "../../services/reviewService";
// import { useReadReviewByIdQuery } from "../../services/api/reviewService";

const ReviewDetails = () => {
  let params = useParams();

  let {
    isError: isErrorViewReview,
    isSuccess: isSuccessViewReview,
    isLoading: isLoadingViewReview,
    data: dataViewReview,
    error: errorViewReview,
  } = useReadReviewByIdQuery(params.id);
  //   console.log(dataViewReview?.result);
  let review = dataViewReview?.result;
  useEffect(() => {
    if (isErrorViewReview) {
      console.log(errorViewReview?.error);
    }
  }, [isErrorViewReview, errorViewReview]);
  return (
    <div>
      {isLoadingViewReview ? (
        <h1>....Loading</h1>
      ) : (
        <div>
          {/* specefic review only i.e 1 review datail so, we dont use map here ok.. */}
          <p>user:{review?.user}</p>
          <p>product:{review?.product}</p>
          <p>description:{review?.description}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
