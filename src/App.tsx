import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home/Home';
import Navbar from './modules/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className='limiter'>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
