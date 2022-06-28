import React from "react";
import {useNavigate} from "react-router-dom";
import {MdChevronLeft} from "react-icons/md";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center bg-white text-black px-3 py-2 rounded-lg font-semibold"
      onClick={() => navigate(-1)}
    >
      <MdChevronLeft />
      Back
    </button>
  );
};

export default BackButton;
