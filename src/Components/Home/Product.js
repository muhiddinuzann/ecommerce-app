import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../Redux/productSlice";
import Loading from "../Loading";
import ProductItem from "./ProductItem";
import ReactPaginate from "react-paginate";

function Product({category, sort}) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    if(category){
      dispatch(getCategoryProducts(category));
    }else{
      dispatch(getProducts());
    }
    dispatch(getProducts());
  }, [dispatch,category]);

  return (
    <div className="e-commerce__container__products--productlist">
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="e-commerce__container__products--productlist--map">
            {" "}
            {currentItems?.sort((a,b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null)?.map((product, i) => (
              <ProductItem key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className="e-commerce__container__products--productlist__paginate"
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            previousLabel="<"
            nextLabel=">"

          />
        </>
      )}
    </div>
  );
}

export default Product;
