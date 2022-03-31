import { useState } from 'react';
import { data } from './products.js';
import IconSwitch from './IconSwitch.js';
import CardsView from './CardsView.js';

function Store() {
  const products = data;
  const [icon, setIcon] = useState('view_list');

  const func = (icon) => {
    setIcon((prevIcon) =>
      prevIcon === 'view_list' ? (icon = 'view_module') : (icon = 'view_list')
    );
  };

  return (
    <div className="wrapper">
      <IconSwitch icon={icon} onSwitch={func} />
      <CardsView state={icon} cards={products} />
    </div>
  );
}

export default Store;