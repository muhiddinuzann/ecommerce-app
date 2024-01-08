import React, { useState } from "react";
import Slider from "../Components/Home/Slider";
import Sorting from "../Components/Home/Sorting";
import Category from "../Components/Home/Category";
import Product from "../Components/Home/Product";

function Home() {
    const [sort, setSort] = useState(""); 
    const [category, setCategory] = useState(""); 
  return (
    <>
      <Slider />
      <Sorting setSort={setSort}/>
      <div className="e-commerce__container__products">
        <Category setCategory={setCategory}/>
        <Product category={category} sort={sort} />
      </div>
    </>
  );
}

export default Home;
