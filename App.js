import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import List from './List';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <List />
      <Footer />
    </div>
  );
}

export default App;