import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Careers from './components/careers';
import Pricing from './components/pricing';
import Services from './components/services';
import AboutUs from './components/about-us';
import NotFound from "./components/not-found";
import './App.scss';
import SearchBox from './components/search-box';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search-box" > <SearchBox /> </Route>
          <Route path="/careers" > <Careers /></Route>
          <Route path="/pricing"   > <Pricing /> </Route>
          <Route path="/services"  > <Services /> </Route>
          <Route path="/about-us"   > <AboutUs /></Route>
          <Route path="/" exact > <Home /> </Route>
          <Route path="*" > <NotFound /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
