import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Reservations from './components/Reservations'
import Menu from "./components/Menu"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar title="Strivestaurant"/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/reservations" component={Reservations}/>
      <Route exact path="/menu" component={Menu}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
