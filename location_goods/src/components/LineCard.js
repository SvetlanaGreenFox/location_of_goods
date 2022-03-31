function LineCard(props) {
  const { card } = props;

  return (
    <div className="line-wrapper">
      <img src={card.img} />
      <div className="title__line-wrapper">
        <p className="title-product">{card.name}</p>
      </div>
      <div className="color__line-wrapper">
        <p className="color-second">{card.color}</p>
      </div>
      <div className="price__line-wrapper">
        <span className="product-price">${card.price}</span>
      </div>
      <div className="button__line-wrapper">
        <button className="button-second">ADD TO CARD</button>
      </div>
    </div>
  );
}

export default LineCard;