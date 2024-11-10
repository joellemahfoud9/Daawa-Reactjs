import React from 'react';
import ProductCard from './ProductCard';
import {products} from '../../constant/index';

function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          image={product.image} 
          rating={product.rating} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

export default ProductGrid;