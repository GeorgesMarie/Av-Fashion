import React, { Component } from 'react';
import './App.css';

// mdb react
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


// Import Components
import TopElement from './Components/TopElement';
import Header from './Components/Header';
import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';

class App extends Component {
  render() {
    return (
      <section>
        <div className="App">
          <TopElement />
        </div>

        <header>
          <Header />
        </header>

        <main>
          <Home />
        </main>

        <Footer />

      </section>
    );
  }
}

export default App;
