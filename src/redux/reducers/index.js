// reducers.js
const initialState = {
  products: [],
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
      };
    case "FETCH_PRODUCT_BY_ID":
      return {
        ...state,
        selectedProduct: action.payload.product,
      };
    default:
      return state;
  }
};

export default productReducer;
