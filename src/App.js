import React from 'react'
import Welcomepage from './pages/Welcomepage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Welcomepage} />
      <Route path="/home" component={Home} />
      <Route path="/cases" component={Home} />
      <Route path="/profile/:uid" component={Home} />
      <Route path="/login" component={Welcomepage} />
    </BrowserRouter>
  );
}

export default App;
