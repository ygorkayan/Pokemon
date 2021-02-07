import { Product, Img, Name, Price, AreaTotal, T, Btn } from "./Style";

export function showProduct(photo: string, name: string, price: number) {
  return (
    <Product>
      <Img src={photo} />
      <Name>{name}</Name>
      <Price>R$ {price}</Price>
    </Product>
  );
}

export function showTotal(total: number = 0) {
  return (
    <AreaTotal>
      <T>Total(sem frete): R$ {total}</T>
      <Btn>Ver Carrinho</Btn>
    </AreaTotal>
  );
}
