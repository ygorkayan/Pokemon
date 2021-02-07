import React from "react";
import { Container } from "./Style";

import Title from "../Title/Title";
import Search from "../SearchIcon/Search";
import CartIcon from "../CartIcon/CartIcon";


export default function Header() {
  return (
    <Container>
      <Title value="pokemon store"/>
      <Search />
      <CartIcon amountProduct={10} />
    </Container>
  );
}
