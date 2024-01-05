import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";

const ProductItem = (props) => {
  const { data } = props;
  return (
    <Card>
      <h1>{data?.title ?? ""}</h1>
      <Image src={data?.thumbnail} height={200} />
      <Button onClick={() => {}} className="mt-3">
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductItem;
