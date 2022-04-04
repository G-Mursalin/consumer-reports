import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto  px-5 py-24">
      <div>
        <h1 className="text-3xl font-bold text-green-500">
          What is the purpose of using context api in react?
        </h1>
        <p className="mt-5">
          Context is a built-in API introduced in React 16.3. It makes it
          possible to pass data from parent to children nested deep down the
          component tree directly. Instead of passing it down through a chain of
          props.It is designed to share data that can be considered “global” for
          a tree of React components, such as the current authenticated user,
          theme, or preferred language. Using context, we can avoid passing
          props through intermediate elements.
        </p>
      </div>
      <div className="my-3">
        <h1 className="text-3xl font-bold text-green-500">
          What is semantic tag?
        </h1>
        <p className="mt-5">
          HTML5 provides new semantic elements. Elements with a meaningful name
          is called semantic tag. This tags clearly describes its meaning to
          both the browser and the developer.Now a days all modern web pages
          build with those html semantic tags. By the tag name it's easily
          provide information about the contents.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
