import { useRouter } from "next/router";
import { cards } from "../Product_card";
import Layout from "<Next-project>/pages/Layout";
import Navbar from "<Next-project>/pages/Components/Navbar";
import Link from "next/link";
import { useState } from "react";

function Products() {
  const router = useRouter();
  const { pid } = router.query;
  const index = Number(pid);
  const [img, setimg] = useState<string>(cards[index].img);

  return (
    <Layout>
      <Navbar>
        <nav className="navbar">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </nav>
      </Navbar>
      <div className="container flex gap-8 my-8">
        <div>
          <img
            src={img}
            alt=""
            className="h-[480px] w-[680px] ml-5 inline-block rounded-md object-cover"
          />

          <div className="w-full flex mt-5 border-l-gray-900">
            {cards.map((card, index) => (
              <img
                onClick={() => setimg(card.img)}
                src={card.img}
                alt=""
                className="h-[80px] w-[120px] ml-5 inline-block rounded-md object-cover"
              />
            ))}
          </div>
        </div>
        <div>
          <span className="font-bold text-[3rem]">{cards[index].title}</span>
          <p>{cards[index].description}</p>
          <h2>Colors</h2>
          <ul className="list-none flex gap-5">
            <li className=" outline-blue-700 outline outline-offset-4 bg-blue-700 rounded-full p-3 my-4">
              Red
            </li>
            <li className=" outline-red-500 outline outline-offset-4 bg-red-500 rounded-full p-3 my-4">
              Red
            </li>
            <li className="bg-yellow-400 outline outline-offset-4 bg-yellow outline-yellow-400 rounded-full p-3 my-4">
              Red
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
