import Carousel from "./Carousel";
import Category from "./Category";
import Filter from "./Filter";
import Product from "./Product";

const Body = ({sneakers,firstProduct,shorts,watches,glasses}) => {
  console.log(watches);
  return (
    <div>
      <Carousel firstProduct={firstProduct}/>
      <Category sneakers={sneakers} watches={watches} shorts={shorts} glasses={glasses} />

      <Product products={sneakers} name="Sneakers"/>
      {/* <Product products={watches} /> */}
      <Product products={shorts} name="Shorts"/>
      <Product products={glasses} name="Glasses"/>
      {/* <Filter/> */}
    </div>
  );
};

export default Body;
