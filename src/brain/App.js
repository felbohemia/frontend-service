import React from 'react';
import Home from './brain/Home';
import Navigation from './brain/Navbar';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import About from './brain/About';
import Main from './brain/Main';
import './App.css';

/*import About from './brain/About';
import Navigation from './brain/Navbar';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Main from './brain/Main';
import Footer from './brain/footer';*/

/*

*/

const App = ()=> {
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about" component={About}/>
          <Route path="/Main" component={Main}/>

        </Switch>
    </BrowserRouter>
    </div>
  );
}



export default App;
