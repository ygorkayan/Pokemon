import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const H1 = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  text-decoration: overline underline;
`;

interface IProps {
  value: string;
}

export default function Title(props: IProps) {
  return (
    <Link to="/">
      <H1>{props.value}</H1>
    </Link>
  );
}
