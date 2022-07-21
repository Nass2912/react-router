import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const {productId} = useParams();
  const product = products.find((producters) => {
    return(producters.id === productId)
  })
  const {image, name} = product

  return (
      <section className='section product'>
        <h2>{name}</h2>
        <img src= {image} alt= {name} style={{display:"block",
      marginBottom: "20px"}}></img>
        <Link to='/products' className="btn">Back To Products</Link>
      </section>
  );
};

export default SingleProduct;
