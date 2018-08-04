import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './Responsive.css';

// mdb react
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// Import Components
import TopElement from './Components/TopElement';
import Header from './Components/Header';
import Home from '../src/Components/Home';
import Brand from '../src/Components/Brand';
import Stores from '../src/Components/Stores';
import SignIn from '../src/Components/SignIn';
import Footer from '../src/Components/Footer';
import Error from "../src/Components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopElement />
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/brand" component={Brand} />
            <Route path="/stores" component={Stores} />
            <Route path="/sign" component={SignIn} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;