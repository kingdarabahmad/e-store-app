import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <div className="flex flex-col w-full mt-2">
      <h1 className="font-bold text-lg">Order Details</h1>
      <div className="flex flex-col mt-1">
        {checkoutToken?.line_items.map((prod) => (
          <div
            className="w- full flex flex-row justify-between mt-1"
            key={prod.id}
          >
            <div className="flex flex-col ">
              <li className=" font-bold list-none">{prod.name}</li>
              <li className=" text-gray-400 list-none">
                Quantity:{prod.quantity}
              </li>
            </div>
            <li className="list-none font-bold">
              {prod.line_total?.formatted_with_symbol}
            </li>
          </div>
        ))}

        <div className="flex flex-row justify-between">
          <h3 className="mt-2 font-bold text-lg">Total</h3>
          <h3 className="mt-2 font-bold text-lg">
            {checkoutToken?.subtotal.formatted_with_symbol}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Review;
