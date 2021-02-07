import styled from "styled-components";

export const Container = styled.div`
  height: 55px;
  width: 30px;
  position: relative;
  cursor: pointer;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.div`
  position: absolute;
  top: 0px;
  font-size: 1rem;
  font-weight: 700;
`;
