import React from "react";
import { Container, Img, Title, Price } from "./Style";
import { Rate } from "./Util";
import { IPokemon } from "../../Service/ProductApi";

export default function Card(props: IPokemon) {
  const { name, photoFront, rate, price } = props;
  return (
    <Container>
      <Img src={photoFront} />
      <Title>{name}</Title>
      {Rate(rate)}
      <Price>R$ {price}</Price>
    </Container>
  );
}
