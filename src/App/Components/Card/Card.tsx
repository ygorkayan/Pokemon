import React from "react";
import { Container, Img, Title, Price } from "./Style";

import Rate from "../Rate/Rate";
import { IPokemon } from "../../Service/ProductApi";
import { Link } from "react-router-dom";

export default function Card(props: IPokemon) {
  const { id, name, photoFront, rate, price } = props;
  return (
    <Link to={`/moreinfo/${id}`}>
      <Container>
        <Img src={photoFront} />
        <Title>{name}</Title>
        <Rate stars={rate} />
        <Price>R$ {price}</Price>
      </Container>
    </Link>
  );
}
