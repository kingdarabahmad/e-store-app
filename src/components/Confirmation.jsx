import React from "react";
import { Link } from "react-router-dom";

const Confirmation = ({ formData }) => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="font-bold text-2xl  mb-2 tracking-wider">Confirmation</h1>
      <h3 className="font-medium text-gray-700 capitalize mb-2 text-center">
        Thank You! For your Purchase {formData.firstName} {formData.lastName}
      </h3>
      <Link to="/">
        <button className="bg-pink-800 shadow-lg shadow-pink-800/50 text-white rounded-md p-2 font-medium mt-5">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
