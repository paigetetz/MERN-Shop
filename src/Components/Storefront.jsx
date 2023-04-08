import React, {useState} from 'react';
import inventoryData from '../Inventory';
import Shoes from './Shoes';

const Storefront = (props) => {
const [inventory, setInventory] = useState(inventoryData);
console.log(inventory);
  return (
    <div className='storefront-wrapper'>
      <h1>New Releases</h1>
      <Shoes items = {inventory}/>

    </div>
  );
}

export default Storefront;