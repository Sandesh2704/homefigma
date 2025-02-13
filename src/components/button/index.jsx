import React from "react";

export default function Button({ title, bgGreen, roundedfull }) {
  return (
    <div
      className={`px-6 py-3 text-base lg:text-lg font-[500] w-fit text-center
      ${bgGreen ? "bg-primary text-black" : "bg-secondary text-white"}
      ${roundedfull ? "rounded-full" : "rounded-lg"}`}
    >
      {title}
    </div>
  );
}