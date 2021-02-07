import React, { useContext } from "react";
import { Container } from "./Style";
import { showProduct, showTotal } from "./Util";
import { ProductContext } from "../../Context/Product/Product";

interface IProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartSuspended(props: IProps) {
  const { products } = useContext(ProductContext);
  // {showProduct(products[0].photoFront, products[0].name, products[0].price)}
  return (
    <Container onMouseOut={() => props.setHidden(true)} hidden={props.hidden}>
      {showProduct(products[0].photoFront, products[0].name, products[0].price)}
      {showProduct(products[0].photoFront, products[0].name, products[0].price)}
      {showProduct(products[0].photoFront, products[0].name, products[0].price)}
      
      {showTotal(1000)}
    </Container>
  );
}
