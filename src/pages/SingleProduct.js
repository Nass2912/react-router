import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const {productId} = useParams();
  return (
    <>
      <section className='section product'>
        <h2>{productId}</h2>
      </section>
      <Link to='/products' className="btn">Back To Products</Link>
    </>
  );
};

export default SingleProduct;
