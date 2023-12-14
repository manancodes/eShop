import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, Images, listPrice } = product;
  return (
    <div className="border max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md m-4 md:w-72 lg:w-96">
      <Link to={`/products/${id}`}>
        <img
          src={Images[0].src}
          alt={name}
          className="object-contain w-full h-40 md:h-56 lg:h-64 p-4 md:p-6"
        />
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">${listPrice.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
