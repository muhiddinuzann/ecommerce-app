import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../Redux/categorySlice';

function Category({setCategory}) {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className='e-commerce__container__products--category'>
      <h3>Category</h3>
      {categories?.map((category, i) => (
        <div onClick={() => setCategory(category)} className='e-commerce__container__products--category--list' key={i}>{category}</div>
      ))}
    </div>
  );
}

export default Category;
