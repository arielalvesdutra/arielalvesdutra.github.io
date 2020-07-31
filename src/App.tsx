import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './containers/header/Header';
import AppRoutes from './Routes'
import Footer from './containers/footer/Footer'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
