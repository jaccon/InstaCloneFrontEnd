import React from 'react';
import { BrowserRouter } from 'react-router-dom';


// Import Routes
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
