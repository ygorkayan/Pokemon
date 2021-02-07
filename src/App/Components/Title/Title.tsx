import React from "react";
import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  text-decoration: overline underline;
`;

interface IProps {
  value: string;
}

export default function Title(props: IProps) {
  return <H1>{props.value}</H1>;
}
