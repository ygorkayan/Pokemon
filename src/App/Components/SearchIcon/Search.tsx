import React from "react";
import { Container, Input, Icon } from "./Style";
import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <Container>
      <Input type="text" placeholder="Busque seu Pokemon" />
      <Icon>
        <SearchIcon fontSize="large" />
      </Icon>
    </Container>
  );
}
