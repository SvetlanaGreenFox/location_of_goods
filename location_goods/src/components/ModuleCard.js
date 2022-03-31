function ModuleCard(props) {
  const { card } = props;

  return (
    <div className="product-wrap">
      <div className="product-item">
        <div className="title">
          <p className="title-product">{card.name}</p>
          <p className="color-product">{card.color}</p>
        </div>
        <img src={card.img} />
        <div className="price">
          <span className="product-price">${card.price}</span>
        </div>
        <div className="product-buttons">
          <button type="submit" className="button">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModuleCard;
