import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 620px;
  margin: 1rem auto 0px;

  @media (max-width: 1200px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const Total = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  height: 380px;
  background-color: #f8f8f8;

  @media (max-width: 1020px) {
    width: 100vw;
  }
`;

export const TotalTitle = styled.p`
  font-size: 1.6rem;
  color: var(--gray);
`;

export const TotalPrice = styled.p`
  margin: 2rem 0px;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--gray);
`;

export const Hr = styled.hr`
  border: none;
  background-color: gray;
  height: 0.2px;
`;

export const AreaBtn = styled.div`
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 150px;
`;

export const AboutCart = styled.div`
  width: 68%;
  height: 620px;

  @media (max-width: 1020px) {
    width: 100vw;
  }
`;

export const TitleProductInCart = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--gray);
`;

export const ProductInCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 3rem;
  height: 90px;

  @media (max-width: 1020px) {
    width: 100vw;
    margin-right: none;
    padding-right: 1rem;
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;

  @media (max-width: 1020px) {
    width: 140px;
  }
`;

export const PriceProduct = styled.p`
  font-size: 1.2rem;
`;

export const ModalBuy = styled.div`
  display: ${(props) => (props.hidden ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 700px;
  width: 360px;
  height: 250px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  border-radius: 0.5rem;

  @media (max-width: 1020px) {
    top: calc(50vw - 250px);
    left: calc(49vh - 360px);
  }

  @media (max-width: 360px) {
    width: 100vw;
    top: 30vh;
    left: 0px;
  }
`;

export const MsgBuy = styled.p`
  color: var(--gray);
  margin-top: 1rem;
`;
