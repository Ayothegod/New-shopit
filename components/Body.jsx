import Carousel from "./Carousel";
import Category from "./Category";
import Filter from "./Filter";
import Product from "./Product";

const Body = ({sneakers,firstProduct}) => {
  return (
    <div>
      <Carousel firstProduct={firstProduct}/>
      <Category />
      <Product sneakers={sneakers} />
      <Filter/>
    </div>
  );
};

export default Body;
