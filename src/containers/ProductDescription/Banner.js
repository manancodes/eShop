import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-36 lg:h-64 bg-gray-100 mb-10 lg:mb-20">
      <p className="text-zinc-900 text-2xl lg:text-4xl text-center pb-4 uppercase">
        TV Collection
      </p>
      <p className="text-zinc-900 text-base lg:text-lg text-center font-extralight  uppercase tracking-widest">
        Home / Product / Tv Collection
      </p>
    </div>
  );
};

export default Banner;
