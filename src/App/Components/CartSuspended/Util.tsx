import React from "react";
import { Product, Name, Price, AreaTotal, T } from "./Style";
import { Link } from "react-router-dom";
import { IPokemon } from "../../Service/ProductApi";
import { Button } from "../Btn/Btn";

export interface IProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function showTotal(total: number) {
  return (
    <AreaTotal>
      <T>Total(sem frete): R$ {total}</T>
      <Link to="/cart">
        <Button width="140px" height="40px">
          Ver Carrinho
        </Button>
      </Link>
    </AreaTotal>
  );
}

export function showProducts(products: IPokemon[], total: number) {
  const cart = products.map((product, indice) => {
    const { photoFront, name, price } = product;
    return (
      <Product key={indice}>
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
