import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../Redux/productSlice';
import DetailComp from '../Components/Detail/DetailComp';
import Loading from '../Components/Loading';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, productDetailStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <>
      {productDetailStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </>
  );
}

export default Detail;
