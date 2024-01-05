import React, { useContext } from "react";
import { Image, Button } from "react-bootstrap";
import { ProductStore } from "../../constant/cartprovider";

const Cart = () => {
  //   const { cart } = useContext(ProductStore);
  //   console.log(cart, "cart");
  return (
    <div>
      <p>product name</p>
      <h1>{""}</h1>
      <Image src={``} height={200} />
      <Button onClick={() => {}} className="mt-3">
        Remove from cart
      </Button>
    </div>
  );
};

export default Cart;
