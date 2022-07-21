import { Link } from "react-router-dom";

export const Products = () => {
  return (
      <section className='section'>
        <h2>products</h2>
        <Link to="/" className="btn">Back to home</Link>
      </section>
  );
};
