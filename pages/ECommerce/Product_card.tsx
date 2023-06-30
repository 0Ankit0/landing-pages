import { useRouter } from "next/router";

export const cards = [
  {
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    title: "Card 1",
    description: "This is card first",
    price: "Rs 200",
  },
  {
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Card 2",
    description: "This is card second",
    price: "Rs 300",
  },
  {
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    title: "Card 3",
    description: "This is card three",
    price: "Rs 900",
  },
  {
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Card 4",
    description: "This is card four",
    price: "Rs 700",
  },
];
function Product_card() {
  const router = useRouter();
  return (
    <div className="container mx-auto my-7">
      <div className="bg-white grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
        {cards.map((card, cardIndex) => (
          <div key={cardIndex} className="shadow-lg rounded-lg">
            <img src={card.img} alt="" className="rounded-t-lg mb-3 " />
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-gray-200">
                Stock available
              </span>
            </div>
            <div className="mb-3">
              <h3 className="mb-3 font-bold text-2xl text-center">
                {card.title}
              </h3>
              <span className="text-xl font-bold ">{card.price}</span>

              <div className="mb-3">
                <span className="text-sm line-through opacity-50">Rs 500</span>
                <span className="bg-green-300 px-1.5 py-0.5 rounded-md text-xs ml-2">
                  Save 11%
                </span>
              </div>
              <span className="flex mb-3">
                <img src="/images/star.svg" alt="" />
                <img src="/images/star.svg" alt="" />
                <img src="/images/star.svg" alt="" />
                <img src="/images/star-half-fill.svg" alt="" />
                <img src="/images/star-no-fill.svg" alt="" />
                <span>1k Reviews</span>
              </span>
              <p className="mb-3">{card.description}</p>
              <div className="mt-5 flex gap-2 mb-3">
                <button className="px-6 py-3 tracking-wider  transition rounded-md bg-blue-700/90 hover:bg-blue-700/80">
                  Add to cart
                </button>
                <button className="px-6 justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
                  <img className="opacity-50" src="/images/love.svg" alt="" />
                </button>
                <button
                  className="px-6 justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"
                  onClick={() =>
                    router.push({
                      pathname: "./ECommerce/Products/[pid]",
                      query: { pid: cardIndex },
                    })
                  }
                >
                  <img className="opacity-50" src="/images/eye.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product_card;
