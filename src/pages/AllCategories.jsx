import React from 'react';
import Sidebar from '../components/ListCategory/Sidebar';
import ProductGrid from '../components/ListCategory/ProductGrid';

function AllCategories() {
  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <ProductGrid />
      </div>
    </div>
  );
}
export default AllCategories;