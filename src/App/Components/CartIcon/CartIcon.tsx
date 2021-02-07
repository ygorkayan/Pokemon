import React, { useState } from "react";
import { Container, Indicator } from "./Style";
import CartIcon from "@material-ui/icons/ShoppingCart";
import CartSuspended from "../CartSuspended/CartSuspended";

interface IProps {
  amountProduct: number;
}

export default function Cart(props: IProps) {
  const [hidden, setHidden] = useState(true);
  return (
    <Container onMouseOver={() => setHidden(false)}>
      <Indicator>{props.amountProduct}</Indicator>
      <CartIcon fontSize="large" />
      <CartSuspended hidden={hidden} setHidden={setHidden} />
    </Container>
  );
}
