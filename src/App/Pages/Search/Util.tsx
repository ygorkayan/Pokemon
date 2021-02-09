import Card from "../../Components/Card/Card";
import { Section, TitleSection, Content } from "./Style";
import { IPokemon } from "../../Service/ProductApi";

function showProducts(products: IPokemon[]) {
  return products.map((value) => {
    return <Card key={Math.random()} {...value} />;
  });
}

export function createSection(products: IPokemon[]) {
  return (
    <Section>
      <TitleSection>produtos encontrados</TitleSection>
      <Content>{showProducts(products)}</Content>
    </Section>
  );
}
