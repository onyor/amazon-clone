import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import alertify from 'alertifyjs';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    //using custom CSS
    //.ajs-message.ajs-custom { color: #31708f;  background-color: #d9edf7;  border-color: #31708f; }
    alertify.success(`Successfully added   ${title}`, 'custom', 2, function () {
      console.log('dismissed');
    });
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
