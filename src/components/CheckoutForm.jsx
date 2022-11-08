import React, { useContext, useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../lib/commerce";
import { appContext } from "../context/Context";
import { GiCheckMark } from "react-icons/gi";
import Confirmation from "./Confirmation";

const CheckoutForm = () => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isPayFormFinished, setIsPayFormFinished] = useState(false);
  const [form, setFormData] = useState({});

  const { cart } = useContext(appContext);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error.message);
      }
    };
    generateToken();
  }, [cart?.id]);

  const nextStep = () => {
    setIsDone(true);
  };

  const backStep = () => {
    setIsDone(false);
  };

  const next = (data) => {
    setShippingData(data);
    setFormData(data);
    nextStep();
  };

  return (
    <div className="flex w-full flex-col mt-12 justify-center items-center">
      <div className="flex w-[90%] h-[90%] flex-col p-2 rounded-lg  items-center justify-evenly">
        <div>
          <h1 className="font-bold text-3xl mb-4 tracking-wider">CHECKOUT</h1>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-between justify-center">
            {isDone && (
              <GiCheckMark className="text-lime-700 text-2xl font-bolder mr-1" />
            )}

            <button
              className={
                isDone
                  ? "bg-lime-700 p-1 rounded-md text-white text-[10px] sm:text-sm  h-[2rem]"
                  : "bg-rose-800 shadow-lg shadow-rose-800/50 p-1 rounded-md text-white text-[10px] sm:text-sm  h-[2rem]"
              }
            >
              Shipping Address
            </button>
          </div>

          <div className="flex flex-row items-center justify-center">
            <button
              className={
                isPayFormFinished
                  ? "bg-lime-700 rounded-md text-white text-[10px] sm:text-sm p-1 h-[2rem]"
                  : "bg-rose-800 shadow-lg shadow-rose-800/50 rounded-md text-white text-[10px] sm:text-sm p-1 h-[2rem]"
              }
            >
              Payment Details
            </button>
            {isPayFormFinished && (
              <GiCheckMark className="text-lime-700 text-2xl font-bolder ml-1 " />
            )}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center w-[90%]  shadow-2xl rounded-lg p-8  mt-10">
          {!isFinished ? (
            isDone ? (
              <PaymentForm
                checkoutToken={checkoutToken}
                shippingData={shippingData}
                backStep={backStep}
                nextStep={nextStep}
                setIsFinished={setIsFinished}
                setIsPayFormFinished={setIsPayFormFinished}
              />
            ) : (
              <AddressForm
                checkoutToken={checkoutToken}
                setIsDone={setIsDone}
                next={next}
              />
            )
          ) : (
            <Confirmation formData={form} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
