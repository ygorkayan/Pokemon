import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function createCarousel(photoFront: string, photoBack: string) {
  return (
    <Carousel width="270px">
      <div>
        <img src={photoFront} />
      </div>
      <div>
        <img src={photoBack} />
      </div>
    </Carousel>
  );
}
