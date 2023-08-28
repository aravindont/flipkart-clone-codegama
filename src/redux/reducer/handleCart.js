const initialState = [];
const handleCart = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product is Already Exist
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    case "DECREASE_QUANTITY":
      const existingItem = state.find((item) => item.id === product.id);
      if (existingItem.qty === 1) {
        return state.filter((item) => item.id !== existingItem.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );

    default:
      return state;
  }
};

export default handleCart;
