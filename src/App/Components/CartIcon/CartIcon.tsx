import React, { useState } from "react";
import { Container } from "./Style";
import { Link } from "react-router-dom";
import CartIcon from "@material-ui/icons/ShoppingCart";
import CartSuspended from "../CartSuspended/CartSuspended";

export default function Cart() {
  const [hidden, setHidden] = useState(true);
  return (
    <Container onMouseOver={() => setHidden(false)}>
      <Link to="/cart">
        <CartIcon fontSize="large" htmlColor="#fff" />
      </Link>
      <CartSuspended hidden={hidden} setHidden={setHidden} />
    </Container>
  );
}
