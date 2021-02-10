import React from "react";
import { Container, Icons } from "./Style";

import Title from "../Title/Title";
import Search from "../SearchIcon/Search";
import CartIcon from "../CartIcon/CartIcon";
import RefreshIcon from "../RefreshIcon/RefreshIcon";

interface IProps {
  title: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header(props: IProps) {
  return (
    <Container>
      <Title value={props.title} />
      <Search />
      <Icons>
        <CartIcon />
        <RefreshIcon setColor={props.setColor}/>
      </Icons>
    </Container>
  );
}
