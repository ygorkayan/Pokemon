import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 920px;
  height: 395px;
  margin: 2rem auto 0px auto;
`;

export const Product = styled.div`
  display: flex;
  background-color: var(--white);
  width: 68%;
  height: 100%;
  border-radius: 0.2rem;
`;

export const AreaImgs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  color: var(--gray);
  text-transform: capitalize;
`;

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: 30%;
  height: 100%;
  border-radius: 0.2rem;
`;

export const Price = styled.p`
  font-size: 3rem;
`;

export const Separator = styled.hr`
  width: 90%;
  border: none;
  background-color: var(--gray);
  height: 0.2px;
  margin: 2rem 0px;
`;

export const Btn = styled.button`
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  width: 200px;
  height: 50px;
  color: var(--white);
  background-color: var(--red);
  text-transform: uppercase;
`;
