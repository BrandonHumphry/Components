import Card from "./Card";

const CardList = ({ id, title, company, description }) => {
  //   const cards = props.cards;

  //   console.log(props, cards);

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.company}</p>
          <p>{card.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
