import Carousel from "./co-components/Carousel";
import { Products } from "./co-components/HighProducts";
import { NewProducts } from "./co-components/NewProducts";

export const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <Products />
      <NewProducts />
    </div>
  );
};
