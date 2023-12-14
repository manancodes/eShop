import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../redux/actions";
import ProductCard from "./ProductCard";

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex flex-wrap justify-evenly">
      {products.map((product) => (
        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
