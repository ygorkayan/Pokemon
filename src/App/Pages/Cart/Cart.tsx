import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart/Cart";
import { viwerProduct, Modal } from "./Util";
import Header from "../../Components/Header/Header";
import Btn from "../../Components/Btn/Btn";

import {
  Container,
  Total,
  TotalTitle,
  Hr,
  TotalPrice,
  AreaBtn,
  AboutCart,
  TitleProductInCart,
} from "./Style";

export default function Cart() {
  const [modalVisible, setModalVisible] = useState(false);
  const { products, length, total, removeProduct, removeAll } = useContext(
    CartContext
  );

  return (
    <React.Fragment>
      <Header title="pokemon store" amountProductInCart={length} />
      {Modal(modalVisible, setModalVisible)}
      <Container>
        <AboutCart>
          <TitleProductInCart>produtos no seu carrinho</TitleProductInCart>
          {viwerProduct(products, removeProduct)}
        </AboutCart>

        <Total>
          <TotalTitle>total da compra</TotalTitle>
          <div>
            <Hr />
            <TotalPrice>total R${total()}</TotalPrice>
            <Hr />
          </div>
          <AreaBtn>
            <Btn
              onClick={() => {
                if (length === 0) return;
                removeAll();
                setModalVisible(true);
              }}
              width="200px"
              height="60px"
            >
              finalizar compra
            </Btn>
            possui cupom ou vale? você poderá usá-los na etapa de pagamento.
          </AreaBtn>
        </Total>
      </Container>
    </React.Fragment>
  );
}
