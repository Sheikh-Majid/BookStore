import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllBooks from '../components/AllBooks';

const Books = () => {
  return (
    <div>
      <Navbar />
        <AllBooks/> 
      <Footer />
    </div>
  );
}

export default Books
