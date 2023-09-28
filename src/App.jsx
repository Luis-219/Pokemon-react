import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => {
  return (
    
    <body>
      <Routes>
          <Route path='/' Component={Pokemon} />
          <Route path='/pokemon' Component={Pokemon} />
          <Route path='/pokemon/:name' Component={Details} />
      </Routes>
    </body>


  );
};
export default App;