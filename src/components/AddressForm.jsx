import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { commerce } from "../lib/commerce";

const AddressForm = ({ checkoutToken, setIsDone, next }) => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisons, setShippingSubdivisons] = useState([]);
  const [shippingSubdivison, setShippingSubdivison] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    next({ ...data, shippingSubdivison, shippingCountry });

  const fetchCountries = async () => {
    const {
      countries: { IN },
    } = await commerce.services.localeListCountries();
    setShippingCountry(IN);
  };

  const fetchSubdivisons = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    const arr = [];
      
    for (let key in subdivisions) {
      arr.push(subdivisions[key]);
    }

    setShippingSubdivisons([...arr]);
    setShippingSubdivison(shippingSubdivisons[0]);
  };

  useEffect(() => {
    fetchCountries(checkoutToken?.id);
  }, [checkoutToken?.id]);

  useEffect(() => {
    fetchSubdivisons("IN");
  }, []);

  return (
    <>
      <h2 className="font-bold text-xl tracking-wide">Shipping Address</h2>

      <form
        className="flex flex-col  items-center mt-2 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="First name"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="Address1"
          {...register("address1", { required: true })}
        />
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="City"
          {...register("city", {})}
        />
        <input
          className=" font-bold text-sm border-2 outline-none  rounded-md mt-4 p-1"
          type="text"
          placeholder="Zip/Postal-Code"
          {...register("zip", {})}
        />
        <label
          className=" font-normal text-md mt-3 self-start p-1"
          htmlFor="shipDivison"
        >
          Select State
        </label>
        <select
          className=" w-[10.8rem] font-bold text-sm  border-2 outline-none  rounded-md mt-0 p-1"
          id="shipDivison"
          {...register("Shipping Subdivision")}
          onChange={(e) => setShippingSubdivison(e.target.value)}
        >
          {shippingSubdivisons.map((item) => (
            <option className="font-bold text-sm" key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="flex justify-between w-full mt-2">
          <Link to="/cart">
            <button className="border-2 border-rose-800  text-sm font-bold text-black  p-1 rounded-md">
              BACK TO CART
            </button>
          </Link>
          <button
            type="submit"
            className="text-sm font-bold w-[3.5rem] text-white bg-sky-800 shadow-lg shadow-sky-800/50 p-1 rounded-md"
          >
            NEXT
          </button>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
