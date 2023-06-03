import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';




function App() {
  // const [currentPage, setCurrentPage] = useState('About');

  // const renderPage = () => {
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //   return <Contact />;
  // };
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App" > 
  
  <main>
    <Header />
    < About />
    <Portfolio />
    <Contact />
    <Footer />
  </main>
</div>


  );
}

export default App;
