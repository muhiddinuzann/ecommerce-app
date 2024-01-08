import React, { useState } from "react";
import { BsCart3, BsBagHeart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

function DetailComp({ productDetail }) {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const decrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const increment = () => {
    if(counter < productDetail?.rating?.count)
    setCounter(counter + 1);
  };

  const addBasket = () => {
    dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: counter, price: productDetail?.price}))
  }
  return (
    <div className="e-commerce__container__productsdetail">
      <div className="e-commerce__container__productsdetail--image">
        <img src={productDetail?.image} />
      </div>
      <div className="e-commerce__container__productsdetail--text">
        <div>
          <h1>{productDetail?.title}</h1>
        </div>
        <div>
          <h3>{productDetail?.description}</h3>
        </div>
        <div>
          <span>Rating : </span>
          <span>{productDetail?.rating?.rate}</span>
        </div>
        <div>
          <span>Total Count : </span>
          <span>{productDetail?.rating?.count}</span>
        </div>
        <div>
          <span>Price : </span>
          <span>{productDetail?.price}</span>
        </div>
        <div className="e-commerce__container__productsdetail--text__counter">
          <button onClick={decrement} className="incrementButton">
            -
          </button>
          <input type="text" value={counter} disabled />
          <button onClick={increment} className="decrementButton">
            +
          </button>
        </div>
        <div className="e-commerce__container__productsdetail--text__buttons">
          <div className="e-commerce__container__productsdetail--text__buttons__addcart">
            <button onClick={addBasket}>
              <BsCart3 />
              Add to cart
            </button>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default DetailComp;
