import Card from "../../Components/Card/Card";
import { Section, TitleSection, Content } from "./Style";
import { IPokemon } from "../../Service/ProductApi";

function showProducts(products: IPokemon[], show: number) {
  const pok = [];
  for (let i = 0; i < show; i++) {
    const aleatorio = Math.round(Math.random() * (100 - 0) + 0);
    const product = products[aleatorio];
    if (!product) continue;
    pok.push(<Card key={Math.random()} {...product} />);
  }
  return pok;
}

export function createSection(
  products: IPokemon[],
  title: string,
  show: number = 5
) {
  return (
    <Section>
      <TitleSection>{title}</TitleSection>
      <Content>{showProducts(products, show)}</Content>
    </Section>
  );
}
