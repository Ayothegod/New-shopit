import Carousel from "./Carousel";
import Category from "./Category";
import Filter from "./Filter";
import Product from "./Product";

const Body = ({sneakers,firstProduct,shorts,watches,glasses}) => {
  return (
    <div>
      <Carousel firstProduct={firstProduct}/>
      <Category sneakers={sneakers} />
      <Product sneakers={sneakers} />
      <Product sneakers={sneakers} />
      {/* <Filter/> */}
    </div>
  );
};

export default Body;
