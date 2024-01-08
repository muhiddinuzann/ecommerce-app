import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductItem({product, productDetail}) {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate(`product/${product?.id}`)} className='e-commerce__container__products--productlist--map__item'>
      <div className='e-commerce__container__products--productlist--map__item--price'>
        {product?.price} $
      </div>
        <img src={product?.image}/>
        <div className='e-commerce__container__products--productlist--map__item--name'>{product?.title}</div>
    </div>
  )
}

export default ProductItem