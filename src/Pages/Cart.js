import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../Redux/cartSlice";
import CartComp from "../Components/Cart/CartComp";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);


  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div className="e-commerce__container__basketcomp">
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="e-commerce__container__basketcomp--totalprice">
            <div className="e-commerce__container__basketcomp--totalprice__text">
              <span>
                Total Price : <span>{totalAmount}</span> $
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center m-auto items-center h-screen text-3xl">Cart İs Empty</div>
      )}
    </div>
  );
}

export default Cart;
