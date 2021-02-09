import React, { useContext } from "react";
import { Container, CartEmpty } from "./Style";
import { showProducts, IProps } from "./Util";
import { CartContext } from "../../Context/Cart/Cart";

export default function CartSuspended(props: IProps) {
  const { products, total } = useContext(CartContext);

  return (
    <Container onMouseOut={() => props.setHidden(true)} hidden={props.hidden}>
      {products.length ? (
        showProducts(products, total())
      ) : (
        <CartEmpty>seu carrinho esta vazio</CartEmpty>
      )}
    </Container>
  );
}
