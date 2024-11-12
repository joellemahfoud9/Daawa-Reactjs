import React from 'react';
import Sidebar from '../components/Services/Category/Sidebar';
import ListCategory from '../components/Services/Category/ListCategory'
import Navbar from '../components/home/Navbar'

function AllCategories() {
  return (
    <div>
      <Navbar simpleLogo={true} />
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <ListCategory/>
      </div>
    </div>
  </div>
    
  );
}
export default AllCategories;