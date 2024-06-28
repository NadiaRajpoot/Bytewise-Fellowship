import { items } from "./mockdata";
import "./Product.css";
const Product = () => {
  const { img } = items;
  return (
    <>
      <div className="header">
        <h1>Products</h1>
      </div>
      <div className="item-container">
        {items.map((items) => {
          return (
            <div className="item">
              <img src={items.img} alt="products" />
              <div className="bottom">
                <h4>{items.name}</h4>
                <p>{items.desc}</p>
                <h4>{items.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
