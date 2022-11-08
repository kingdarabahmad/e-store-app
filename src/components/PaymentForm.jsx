import React, { useContext } from "react";
import { appContext } from "../context/Context";
import { commerce } from "../lib/commerce";
import Review from "./Review";

const PaymentForm = ({
  shippingData,
  checkoutToken,
  backStep,
  setIsFinished,
  setIsPayFormFinished,
}) => {
  const { setCart } = useContext(appContext);

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handlePayButton = () => {
    setIsFinished(true);
    setIsPayFormFinished(true);
    refreshCart();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <br />
      <div className="flex flex-col w-full">
        <hr />
        <br />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <button
            className="border-2 border-rose-800 rounded-md p-[0.3rem] font-medium mb-1"
            onClick={backStep}
          >
            BACK
          </button>
          <button
            className="bg-sky-800 shadow-lg shadow-sky-800/50 text-white rounded-md p-2 mb-1"
            type="submit"
            onClick={handlePayButton}
          >
            PAY {checkoutToken?.subtotal.formatted_with_symbol}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
