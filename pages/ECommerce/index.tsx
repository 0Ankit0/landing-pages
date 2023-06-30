import Layout from "../Layout";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import Slider from "./Slider";
import Card from "./Card";
import Product_card from "./Product_card";

function index() {
  const arr = [{ name: "Home", link: "./" }];
  return (
    <>
      <Layout>
        <Navbar list={arr} />

        <Slider></Slider>
        <Card></Card>
        <Product_card />
      </Layout>
    </>
  );
}

export default index;
