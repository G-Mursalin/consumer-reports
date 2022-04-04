import React from "react";
import { useState } from "react";
// Custom Hook
import useFetch from "../../hook/useFetch";
const Home = () => {
  // const [data, setData] = useFetch("");
  // console.log(data);
  return (
    <React.Fragment>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title-font sm:text-4xl text-3xl  font-bold text-gray-900">
              Your next gaming experience
            </div>
            <div className="title-font sm:text-4xl text-3xl mt-2 font-bold text-green-600 ">
              Your best experience ever
            </div>
            <p className="mb-8 leading-relaxed mt-4">
              Turn reviews into traffic, sales, and customer loyalty. Discover
              what the people who matter most are saying about your
              brand.Whether you need reviews for your services, products, or
              business locations — Customers Reports reviews help you drive more
              traffic from paid and organic search results, and make the
              purchasing decision easy once those shoppers get to your site.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Live Demo
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=600"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
