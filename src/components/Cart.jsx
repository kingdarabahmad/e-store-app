import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/Context";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart, handleCartQuantity, handleRemoveItemCart, handleEmptyCart } =
    useContext(appContext);
  return (
    <div className="mt-12">
      <h1 className=" text-center  text-2xl font-extrabold tracking-wider ">
        SHOPPING CART
      </h1>

      <div className="flex flex-row flex-wrap justify-center mt-10 sm:mt-12 p-3">
        {cart?.total_items ? (
          cart.line_items.map((item) => (
            <CartItems
              id={item.id}
              key={item.id}
              image={item.image.url}
              name={item.name}
              price={item.line_total.formatted_with_symbol}
              quantity={item.quantity}
              updateCart={handleCartQuantity}
              removeCartItem={handleRemoveItemCart}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>

      <div className="flex flex-row justify-center  sm:justify-between m-10 p-2 flex-wrap items-center min-[530px]:justify-between">
        <h1 className="font-bold text-xl p-1 tracking-wider text-center">
          Subtotal: {cart?.subtotal?.formatted_with_symbol}
        </h1>

        {cart?.total_items ? (
          <div className="flex flex-row justify-center mt-4 sm:mt-0 flex-wrap min-[530px]:mt-0    ">
            <Link to="/checkout">
              <button className="bg-sky-800 shadow-lg shadow-sky-800/50 rounded-md mr-2 p-2 text-white max-[280px]:mb-2 ">
                CHECKOUT
              </button>
            </Link>
            <button
              className="bg-rose-800 shadow-lg shadow-rose-800/50 rounded-md p-2 text-white "
              onClick={handleEmptyCart}
            >
              EMPTY CART
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="  p-2 font-medium my-4 text-white rounded-md shadow-lg bg-pink-800 shadow-pink-800/50">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
