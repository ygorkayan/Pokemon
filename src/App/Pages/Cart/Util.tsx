import React from "react";
import {
  Hr,
  ProductInCart,
  InfoProduct,
  PriceProduct,
  ModalBuy,
  MsgBuy,
} from "./Style";
import { IPokemon } from "../../Service/ProductApi";
import Btn from "../../Components/Btn/Btn";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useHistory } from "react-router-dom";

export function Modal(
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
) {
  const history = useHistory();

  if (modalVisible) {
    setTimeout(() => {
      setModalVisible(false);
      history.push("/");
    }, 1500);
  }
  return (
    <ModalBuy hidden={modalVisible}>
      <CheckCircleOutlineIcon htmlColor="var(--color)" fontSize="large" />
      <MsgBuy>Compra finalizada, obrigado por comprar</MsgBuy>
    </ModalBuy>
  );
}

export function viwerProduct(
  products: IPokemon[],
  removeProduct: (index: number) => void
) {
  return products.map((product, index) => {
    const { photoFront, name, price } = product;

    return (
      <React.Fragment key={index}>
        <Hr />
        <ProductInCart>
          <InfoProduct>
            <img src={photoFront} />
            <p>{name}</p>
          </InfoProduct>
          <Btn onClick={() => removeProduct(index)} width="80px" height="40px">
            remover
          </Btn>
          <PriceProduct>R${price}</PriceProduct>
        </ProductInCart>
      </React.Fragment>
    );
  });
}
