"use client"
import { BsStar } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function ({ rating,show=false }) {
  const arr = Array.from({ length: 5 }, (v, i) => {
    let index = i + 0.5;
    return (
      <span key={i} className="text-orange-400">
        {rating >= i + 1 ? (
          <FaStar className="" />
        ) : rating >= index ? (
          <FaStarHalfAlt className="" />
        ) : (
          <BsStar className="" />
        )}
      </span>
    );
  });

  return (
    <div className="flex justify-between items-center">
      <div className="flex">{arr}</div>
      <div className={`text-gray-600 ml-2 ${show?"block":"hidden"}`}>Reviews</div>
    </div>
  );
}