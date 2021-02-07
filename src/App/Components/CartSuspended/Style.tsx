import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};
  top: 55px;
  position: absolute;
  width: 320px;
  background-color: var(--white);
`;

export const CartEmpty = styled.div`
  height: 80px;
  font-size: 1.2rem;
  color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Product = styled.div`
  color: black;
  display: flex;
  align-items: center;
  cursor: default;
`;

export const Name = styled.p`
  font-size: 1rem;
  color: rgba(102, 102, 102, 0.9);
`;

export const Price = styled.p`
  margin-left: 4rem;
  font-weight: 700;
  color: rgba(102, 102, 102);
`;

export const AreaTotal = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 1rem;
  cursor: default;
`;

export const T = styled.p`
  color: #707070;
`;
