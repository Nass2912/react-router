import { Outlet } from "react-router-dom";
import Navbar from "../final/components/Navbar";

export const Home = () => {
  return (
    <section className='section'>
      <Navbar/>
      <Outlet/>
    </section>
  );
};
