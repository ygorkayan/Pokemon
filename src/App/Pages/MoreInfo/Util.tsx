import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AbilitiesName } from "./Style";

export function takeAbilitie(abilities: never[]) {
  return abilities.map((abilitie: any, index) => {
    const name: string = abilitie.ability.name;
    return <AbilitiesName key={index}>{name.replace("-", " ")}</AbilitiesName>;
  });
}

export function createCarousel(photoFront: string, photoBack: string) {
  return (
    <Carousel width="270px" showThumbs={false}>
      <div>
        <img src={photoFront} />
      </div>
      <div>
        <img src={photoBack} />
      </div>
    </Carousel>
  );
}
