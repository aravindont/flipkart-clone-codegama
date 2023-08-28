import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  delCart,
  increaseItemQuantity,
} from "../redux/action";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // Assuming your cart reducer is named 'handleCart'
  const dispatch = useDispatch();

  const handleDecrease = (product) => {
    dispatch(decreaseItemQuantity(product));
  };

  const handleIncrease = (product) => {
    dispatch(increaseItemQuantity(product));
  };

  const handleDelete = (product) => {
    dispatch(delCart(product));
  };

  console.log(cartItems);
  return (
    <div>
      {cartItems?.map((product) => (
        <div className="row m-4" key={product.id}>
          <div className="col-md-4 pb-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p>
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-danger me-4"
              onClick={() => handleDecrease(product)}
            >
              -
            </button>
            <button
              className="btn btn-outline-danger me-4"
              onClick={() => handleIncrease(product)}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger me-4"
              onClick={() => handleDelete(product)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
