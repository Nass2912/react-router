import { Link } from "react-router-dom";
import products from "../data";

export const Products = () => {

  return (
      <section className='section'>
        <h2>products</h2>
        <Link to="/" className="btn">Back to home</Link>
        <div className="products">
          {
            products.map(({id, name}) => {
              return (
                <article key={id}>
                  <h5>{name}</h5>
                  <Link to={`/products/${id}`} className="btn red">More Info</Link>
                </article>
              )
            })
          }
        </div> 
      </section>
  );
};
