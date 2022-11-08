import React, { memo} from "react";
import { BsCartPlusFill } from "react-icons/bs";

const ProductCard = memo(({ id, img, price, descrip, name, addToCart,itemsInCart }) => {
  
  return (
    <div className="flex w-60 h-[310px] shadow-gray-300 flex-col rounded-xl items-center p-3 m-4 shadow-xl hover:scale-110 duration-300 ease-in-out transition-all">
      <img
        className=" w-[90%] h-[60%] object-contain"
        src={img}
        alt="cardimage"
      />
      <div className="flex w-full h-[10%] flex-row  justify-around items-center ">
        <h2 className="text-md  font-bold">{name}</h2>
        <h2 className="text-sm font-bold">{price}</h2>
      </div>
      <h3 className="text-sm pt-4 h-[10%] text-gray-400">
        {descrip.slice(3, -4)}
      </h3>
      {itemsInCart?.includes(name) ? (
        <h3 className="font-bold text-sm text-pink-800 mt-6 ">Added to Cart</h3>
      ) : (
        <BsCartPlusFill
          className="mt-3 h-[20%] text-2xl text-rose-800 hover:text-rose-900 cursor-pointer transition-all"
          onClick={() => addToCart(id, 1)}
        />
      )}
    </div>
  );
});

export default ProductCard;
