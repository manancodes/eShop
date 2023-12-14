export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      // Replace this with the actual path to your JSON file
      const response = await fetch("/products.json");
      const products = await response.json();
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: { products },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error action if needed
    }
  };
};

export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      // Replace this with the actual path to your JSON file
      const response = await fetch("/products.json");
      const products = await response.json();
      const product = products.find((p) => p.id === productId);
      dispatch({
        type: "FETCH_PRODUCT_BY_ID",
        payload: { product },
      });
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      // Handle error action if needed
    }
  };
};
