import React from "react";

const CartItems = ({
  id,
  image,
  price,
  descrip,
  name,
  quantity,
  updateCart,
  removeCartItem,
}) => {
  return (
    <div className="flex w-60 h-[310px] shadow-gray-300 flex-col rounded-xl items-center p-3 m-4 shadow-xl hover:scale-110 duration-300 ease-in-out transition-all">
      <img
        className=" w-[90%] h-[60%] object-contain"
        src={image}
        alt="cardimage"
      />
      <div className="flex w-full h-[20%] flex-row  justify-around items-center ">
        <h2 className="text-md  font-bold">{name}</h2>
        <h2 className="text-sm font-bold">{price}</h2>
      </div>
      <div className="flex w-full h-[20%] flex-row justify-evenly items-center">
        <button
          className="font-bold text-xl"
          onClick={() => updateCart(id, quantity - 1)}
        >
          -
        </button>
        <h3 className="font-bold text-xl">{quantity}</h3>
        <button
          className="font-bold text-xl"
          onClick={() => updateCart(id, quantity + 1)}
        >
          +
        </button>
        <button
          className="bg-rose-800 text-white p-1 rounded-md shadow-lg shadow-rose-800/50 "
          onClick={() => removeCartItem(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
