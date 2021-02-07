import React from "react";
import { Container } from "./Style";

import Title from "../Title/Title";
import Search from "../SearchIcon/Search";
import CartIcon from "../CartIcon/CartIcon";

interface IProps {
  title: string;
  amountProductInCart: number;
}

export default function Header(props: IProps) {
  return (
    <Container>
      <Title value={props.title} />
      <Search />
      <CartIcon amountProduct={props.amountProductInCart} />
    </Container>
  );
}
