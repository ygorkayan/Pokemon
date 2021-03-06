import React from "react";
import styled from "styled-components";

interface IProps {
  onClick?: () => void;
  children: any;
  width: string;
  height: string;
}

export const Button = styled.button<IProps>`
  cursor: pointer;
  color: #fff;
  background-color: var(--color);
  border: none;
  text-transform: uppercase;
  width: ${(props) => props.width || "140px"};
  height: ${(props) => props.height || "90px"};
  margin-top: 1rem;
`;

export default function Btn(props: IProps) {
  return (
    <Button
      width={props.width}
      height={props.height}
      onClick={() => (props.onClick ? props.onClick() : "")}
    >
      {props.children}
    </Button>
  );
}
