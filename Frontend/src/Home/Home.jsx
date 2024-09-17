import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FreeBooks from '../components/FreeBooks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FreeBooks />
      <Footer />
    </>
  );
}

export default Home
