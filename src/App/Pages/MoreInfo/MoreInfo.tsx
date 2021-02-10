import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Product,
  AreaImgs,
  ProductInfo,
  Title,
  Buy,
  Price,
  Separator,
  TitleAbilities,
} from "./Style";
import { createCarousel, takeAbilitie } from "./Util";
import Rate from "../../Components/Rate/Rate";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../../Context/Cart/Cart";
import Btn from "../../Components/Btn/Btn";
import { ProductContext } from "../../Context/Product/Product";
import { useHistory } from "react-router-dom";

export default function MoreInfo() {
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState(0);
  const [photoFront, setPhotoFront] = useState("");
  const [photoBack, setPhotoBack] = useState("");
  const [abilities, setAbilities] = useState([]);

  const { products } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);
  const History = useHistory();
  const { id } = useParams<any>();

  useEffect(() => {
    try {
      setName(products[id].name);
      setRate(products[id].rate);
      setPrice(products[id].price);
      setPhotoFront(products[id].photoFront);
      setPhotoBack(products[id].photoBack);
      setAbilities(products[id].abilities);
    } catch {}
  }, [products, id]);

  return (
    <React.Fragment>
      <Container>
        <Product key={id}>
          <AreaImgs>{createCarousel(photoFront, photoBack)}</AreaImgs>

          <ProductInfo>
            <Title>{name}</Title>
            <Rate stars={rate} />
            <TitleAbilities>Abilidades</TitleAbilities>
            {takeAbilitie(abilities)}
          </ProductInfo>
        </Product>

        <Buy>
          <Price>R$ {price}</Price>
          <Separator />
          <Btn
            width="220px"
            height="60px"
            onClick={() => {
              addProduct(products[id]);
              History.push("/");
            }}
          >
            Adicionar Ao Carrinho
          </Btn>
          <Link to="/">
            <Btn width="220px" height="60px">
              Voltar
            </Btn>
          </Link>
        </Buy>
      </Container>
    </React.Fragment>
  );
}
