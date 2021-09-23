import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar title="Strivestaurant"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
