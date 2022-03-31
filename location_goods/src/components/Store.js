import { useState } from 'react';
import { data } from './products.js';
import IconSwitch from './IconSwitch.js';
import CardsView from './CardsView.js';

function Store() {
  const products = data;
  const [icon, setIcon] = useState('view_list');

  const func = () => {
    setIcon((prevIcon) =>
      prevIcon === 'view_list' ? 'view_module' : 'view_list'
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