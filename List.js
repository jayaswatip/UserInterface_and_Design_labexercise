import React from 'react';
import p1 from './assets/p1.png';

const products = [
  { id: 1, name: "Product 1", price: "$19.99", image: p1 },
  { id: 2, name: "Product 2", price: "$24.99", image: p1 },
  { id: 3, name: "Product 3", price: "$14.99", image: p1 },
];

function List() {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h4>{product.name}</h4>
          <p>Price: {product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default List;