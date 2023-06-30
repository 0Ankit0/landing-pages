function Card() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      title: "Card 1",
      description: "This is card first",
    },
    {
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      title: "Card 2",
      description: "This is card second",
    },
    {
      img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",

      title: "Card 3",
      description: "This is card third",
    },
  ];
  return (
    <div>
      <div className="container mx-auto my-7">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-6">
          {cards.map((card, CardIndex) => (
            <div key={CardIndex} className="shadow-lg rounded-lg">
              <img
                src={card.img}
                alt=""
                className="rounded-t-lg mb-3 object-cover"
              />
              <div className="p-5">
                <h3 className="text-3xl font-bold text-slate-700 mb-3">
                  {card.title}
                </h3>
                <p className="font-normal text-lg text-gray-600 mb-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
