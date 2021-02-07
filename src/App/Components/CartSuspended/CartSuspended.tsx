import React, { useContext } from "react";
import { Container, CartEmpty } from "./Style";
import { showProducts } from "./Util";
import { CartContext } from "../../Context/Cart/Cart";

interface IProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

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
