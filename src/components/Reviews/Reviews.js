import React from "react";
// Custom Hook
import useFetch from "./../../hook/useFetch";
// Components
import ShowReviews from "../ShowReviews/ShowReviews";

const Reviews = () => {
  // Fetching Data
  const [reviewData, setReviewData] = useFetch("reviewsData.json");

  return <ShowReviews reviews={reviewData} />;
};

export default Reviews;
