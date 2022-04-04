import React from "react";
// Custom Hook
import useFetch from "./../../hook/useFetch";
const Reviews = () => {
  // Fetching Data
  const [reviewData, setReviewData] = useFetch("reviewsData.json");

  // Creating Reviews
  const reviews = reviewData.map((review) => (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={review.id}>
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={review.img}
        />
        <p className="leading-relaxed">"{review.review}"</p>
        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          {review.name}
        </h2>
        <p className="text-gray-500">Rating: {review.rating}/5</p>
      </div>
    </div>
  ));

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{reviews}</div>
      </div>
    </section>
  );
};

export default Reviews;
