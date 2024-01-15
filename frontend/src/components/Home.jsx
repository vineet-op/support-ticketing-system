import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-screen flex items-center justify-center">
        <div className="flex-1 flex-col gap-6 h-screen flex justify-center items-center">
          <h2 className="text-8xl text-white">Simple</h2>
          <h2 className="text-8xl text-white">Ticketing</h2>
          <h2 className="text-8xl text-white">Manager</h2>
          <div className="mt-8 p-5 rounded-full font-semibold bg-black  text-white">
            <button>Get Started</button>
          </div>
        </div>
        <div className="flex-1  h-screen  flex justify-center items-center">
          <div className="image-hero p-8 ">
            <img
              className="rounded-full"
              src="https://clickup.com/blog/wp-content/uploads/2023/07/ticketing-software-blog-feature.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
