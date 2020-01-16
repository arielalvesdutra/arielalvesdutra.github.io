import React from 'react';
import './App.css';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
