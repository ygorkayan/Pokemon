import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 7rem;
  background-color: var(--color);

  @media (max-width: 1020px) {
    flex-direction: column;
    height: 12rem;
    justify-content: space-between;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;
