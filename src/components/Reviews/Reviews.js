import React from "react";
// Custom Hook
import useFetch from "./../../hook/useFetch";
// Components
import ShowReviews from "../ShowReviews/ShowReviews";

const Reviews = () => {
  // Fetching Data
  const [reviewData, setReviewData] = useFetch("reviewsData.json");

  return (
    <React.Fragment>
      <h1 className="text-center text-3xl font-bold mt-5">
        What out customers says!
      </h1>
      <ShowReviews reviews={reviewData} />
    </React.Fragment>
  );
};

export default Reviews;
