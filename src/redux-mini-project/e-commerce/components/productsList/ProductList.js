import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";
// import Spinner from "react-bootstrap/Spinner";
import { Spin } from "antd";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);

  let category = products.map((item) => {
    return item.category;
  });
  // console.log(category);
  const uniqueCategory = category.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  // console.log(uniqueCategory);

  const status = useSelector((state) => state.productReducer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // fetchData();
  }, [dispatch]);

  const contentStyle = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;

  if (status === "loading") {
    return (
      // <Spinner className="my-spinner" animation="border" variant="primary" />
      <Spin className="my-spinner" description="Loading" size="large">
        {content}
      </Spin>
    );
  }

  if (status === "failed") {
    return <h4 className="my-spinner">Uh Oh! Something went wrong..</h4>;
  }

  return (
    <>
      <div className="category-data">
        {uniqueCategory.map((item) => {
          return <div className="single-category">{item}</div>;
        })}
      </div>
      <div className="single-product">
        {products.map((item) => (
          <>
            <SingleProduct key={item.id} product={item} />
          </>
        ))}
      </div>
    </>
  );
};

export default ProductList;
