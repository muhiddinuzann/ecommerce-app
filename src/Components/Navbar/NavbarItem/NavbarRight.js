import React, { useEffect } from "react";
import { BsBagHeart, BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function NavbarRight() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div className="e-commerce__container__navbar__right">
      <div className="e-commerce__container__navbar__right--cart">
       <button onClick={() => navigate("cart")}>
       <div className="e-commerce__container__navbar__right--cart--notification"
        >
          {carts?.length}
        </div>
        <BsCart3 />
       </button>
      </div>
    </div>
  );
}

export default NavbarRight;
