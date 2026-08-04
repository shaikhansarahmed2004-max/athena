import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Menu />
        <Gallery />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
