import styled from "styled-components";

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 70vw;

  @media (max-width: 1020px) {
    width: 90vw;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const TitleSection = styled.p`
  font-size: 1.7rem;
  color: rgb(102, 102, 102);
  font-weight: 700;
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
