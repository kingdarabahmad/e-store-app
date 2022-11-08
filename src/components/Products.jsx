import React, { useContext} from "react";
import ProductCard from "./ProductCard";
import { appContext } from "../context/Context";
import { Link } from "react-router-dom";

const Products = () => {
  console.log("Products Component re-rendered")
  const { products, handleAddToCart, cart } = useContext(appContext);

  const itemsInCart= cart?.line_items?.map((item) => item.name);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center mt-12 p-3 ">

        {products.map((i) => (
          <ProductCard
            id={i.id}
            key={i.id}
            img={i.image.url}
            name={i.name}
            descrip={i.description}
            price={i.price.formatted_with_symbol}
            addToCart={handleAddToCart}
            itemsInCart={itemsInCart}
          />
        ))}
      </div>

      {cart?.line_items?.length? (
        <div className="flex justify-center">
          <Link to="/cart">
            <button className="  p-2 font-medium my-5 text-white rounded-md shadow-lg bg-pink-800 shadow-pink-800/50">
              GO TO CART
            </button>
          </Link>
        </div>
      ):" "}
    </>
  );
};

export default Products;
