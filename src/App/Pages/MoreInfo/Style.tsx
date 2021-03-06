import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 920px;
  margin: 2rem auto 0px auto;

  @media (max-width: 1200px) {
    border-radius: none;
    width: 720px;
    flex-direction: column;
  }

  @media (max-width: 720px) {
    width: 100vw;
  }
`;

export const TitleAbilities = styled.h2`
  margin: 1.5rem 0px 0.5rem;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--color);
`;

export const AbilitiesName = styled.p`
  color: var(--color);
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Product = styled.div`
  display: flex;
  background-color: #fff;
  width: 68%;
  height: 100%;
  border-radius: 0.2rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
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
  color: var(--color);
  text-transform: capitalize;
`;

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 30%;
  height: 100%;
  border-radius: 0.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 1200px) {
    border-radius: none;
    width: 100%;
  }
`;

export const Price = styled.p`
  font-size: 3rem;
  color: var(--color);
`;

export const Separator = styled.hr`
  width: 90%;
  border: none;
  background-color: var(--color);
  height: 0.2px;
  margin: 2rem 0px;
`;
