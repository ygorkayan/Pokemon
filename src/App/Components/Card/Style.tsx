import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 200px;
  height: 250px;
  box-shadow: 0px 0px 3px rgba(102, 102, 102, 0.5);
  border-bottom: 2px solid rgba(102, 102, 102, 0.5);
  margin: 1rem;

  @media (max-width: 500px) {
    width: 300px;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  margin: 0px auto;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: var(--color);
  text-transform: capitalize;
`;

export const Price = styled.p`
  font-weight: 700;
  color: var(--color);
  font-size: 1.1rem;
`;
