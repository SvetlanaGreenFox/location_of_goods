import LineCard from './LineCard.js';
import ModuleCard from './ModuleCard.js';

function CardsView(props) {
  const { state, cards } = props;
  return (
    <div className="wrapper">
      {state === 'view_list' ? (
        <div className="module-wrapper">
          {cards.map((item) => (
            <ModuleCard card={item} />
          ))}
        </div>
      ) : (
        cards.map((item) => <LineCard card={item} />)
      )}
    </div>
  );
}

export default CardsView;