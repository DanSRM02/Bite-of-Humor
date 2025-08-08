import Card, { CardProps } from "@/components/feedback/Card";

type CardListProps = {
  cards: CardProps[]
};
const CardList = ({ cards }: CardListProps) => {
  return cards.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      body={card.body}
      icon={card.icon}
      badge={card.badge}
      config={card.config}
      features={card.features}
      onExplore={card.onExplore}
      img={card.img}
      jokePunchline={card.jokePunchline}
      jokeSetup={card.jokeSetup}
      jokeType={card.jokeType}
      variant={card.variant}
    />
  ));
};

export default CardList;
