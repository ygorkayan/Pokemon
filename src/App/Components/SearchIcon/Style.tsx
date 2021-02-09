import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 5rem;

  @media (max-width: 1020px) {
    justify-content: center;
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 500px;
  padding: 1rem;
  border: none;
`;

export const Icon = styled.div`
  cursor: pointer;
  margin-left: -2.5rem;
  color: var(--colorPrimary);
`;
