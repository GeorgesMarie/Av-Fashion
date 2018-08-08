import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Brand.css';

// mdb react
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

// Import Components
import TopElement from './Components/TopElement';
import Header     from './Components/Header';
import Home       from './Components/Home';
import Brand      from './Components/Brand';
import Stores     from './Components/Stores';
import SignIn     from './Components/SignIn';
import Footer     from './Components/Footer';
import Error      from "./Components/Error";

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