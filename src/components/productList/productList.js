import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./productItem";
import { Row, Col, Button } from "react-bootstrap";

const ProductList = () => {
  const [product, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response?.data);
      } catch (error) {
        console.log(`error : ${error}`);
      }
    };
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchItem}`
      );
      console.log(response?.data, "search?q=");
      setProducts(response?.data);
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  const handleClear = () => {
    setSearchItem("");
    fetchProducts();
  };
  return (
    <div className="p-5">
      <div className="d-flex gap-2">
        <input
          className="py-2"
          type="text"
          placeholder="Search product..."
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <Button type="submit" onClick={() => fetchProducts()} className=" py-2">
          Search
        </Button>
        <Button
          type="submit"
          onClick={() => handleClear()}
          className=" py-2 ms-4 bg-danger"
          onMouseOut={() => fetchProducts()}
        >
          Clear
        </Button>
      </div>
      <Row className="g-3 mt-5">
        {product?.products?.map((productItem, index) => {
          return (
            <Col md={4} key={index}>
              <ProductItem data={productItem} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
