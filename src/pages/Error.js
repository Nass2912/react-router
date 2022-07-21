import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/" className="btn">Back To Home</Link>
    </section>
  );
};
