import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/41/AVS/SAMSUNG/S21_Palette_Amazon_1500x80.jpg'
          alt=''
          className='checkout__ad'
        />

        <div>
          <h3>
            {user ? 'Hello, ' : ''}
            {user?.email}
          </h3>
          <h2 className='checkout__title'>Your shooping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
        <h2>Tu subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
