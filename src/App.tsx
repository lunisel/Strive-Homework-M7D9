import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar title="Strivestaurant"/>
      <Route exact path="/" render={(routerProps) => <Home {...routerProps}/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
