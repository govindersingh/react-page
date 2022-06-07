import React from "react";
import Collections from "./Collections";
import Product from "./Product";
import Reviews from "./Reviews";

const Tailwind = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Tailwind Single Page</h1>
      <Product/>
      <Collections/>
      <Reviews/>
      
    </div>
  );
};

export default Tailwind;
