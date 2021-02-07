import React from "react";
import { Product, Name, Price, AreaTotal, T } from "./Style";
import { IPokemon } from "../../Service/ProductApi";
import { Button } from "../Btn/Btn";

function showTotal(total: number) {
  return (
    <AreaTotal>
      <T>Total(sem frete): R$ {total}</T>
      <Button width="140px" height="90px">Ver Carrinho</Button>
    </AreaTotal>
  );
}

export function showProducts(products: IPokemon[], total: number) {
  const cart = products.map((product) => {
    const { photoFront, name, price } = product;
    return (
      <Product>
        <img src={photoFront} />
        <Name>{name}</Name>
        <Price>R$ {price}</Price>
      </Product>
    );
  });

  return (
    <React.Fragment>
      {cart}
      {showTotal(total)}
    </React.Fragment>
  );
}
