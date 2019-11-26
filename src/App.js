import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MainProduct from './components/MainProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <MainProduct />
    </div>
  );
}

export default App;
