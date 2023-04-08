import React, {useState} from 'react';
import inventoryData from '../Inventory';
const Storefront = (props) => {
const [inventory, setInventory] = useState(inventoryData);
console.log(inventory);
  return (
    <div className='storefront-wrapper'>
      <h1>New Releases</h1>

    </div>
  );
}

export default Storefront;