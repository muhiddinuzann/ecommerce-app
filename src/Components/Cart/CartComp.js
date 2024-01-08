import React from "react";
import { BsCartX } from "react-icons/bs";
import { removeFromCart, getCartTotal } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

function CartComp({ cart }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cart?.id));
    dispatch(getCartTotal());
  };

  return (
    <div className="e-commerce__container__basketcomp__basket">
      <div className="e-commerce__container__basketcomp__basket--image">
        <img src={cart?.image} alt={cart?.title} />
      </div>
      <div className="e-commerce__container__basketcomp__basket--action">
        <div className="e-commerce__container__basketcomp__basket--action--title">
          <span>{cart?.title}</span>
        </div>
        <div>
          {cart?.price} $ ({cart?.quantity})
        </div>
        <div>
          <button onClick={handleRemoveFromCart}>
            <BsCartX />
            Remove Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartComp;
