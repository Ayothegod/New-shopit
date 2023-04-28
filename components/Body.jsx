import Carousel from "./Carousel";
import Category from "./Category";
import Filter from "./Filter";
import Product from "./Product";

const Body = ({sneakers}) => {
  return (
    <div>
      <Carousel />
      <Category />
      <Product sneakers={sneakers}/>
      <Filter/>
    </div>
  );
};

export default Body;
