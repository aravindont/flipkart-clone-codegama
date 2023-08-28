// Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Remove Item from Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

// Decrease Item Quantity
export const decreaseItemQuantity = (product) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: product,
  };
};

// Increase Item Quantity
export const increaseItemQuantity = (product) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: product,
  };
};
