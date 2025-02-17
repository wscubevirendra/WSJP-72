import React from "react";

const CardSection = () => {
  const cards = [
    {
      title: "Card 1",
      text: "This is a simple card with some quick example text to build on the card title.",
      image: "https://picsum.photos/200/200?random=1",
      button: "Learn More",
    },
    {
      title: "Card 2",
      text: "This card has additional content to demonstrate longer text support within a card.",
      image: "https://picsum.photos/200/200?random=2",
      button: "Explore",
    },
    {
      title: "Card 3",
      text: "Cards are a great way to display content neatly in a grid layout.",
      image: "https://picsum.photos/200/200?random=3",
      button: "Read More",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className="btn btn-primary">
                    {card.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
