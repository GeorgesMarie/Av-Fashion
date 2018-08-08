import React, { Component } from 'react';
import Lookbooks from './Lookbooks';

// Import Images
import men from '../img/homeImages/Mens/men.png';
import men1 from '../img/homeImages/Mens/men-1.png';
import men2 from '../img/homeImages/Mens/men-2.png';

import girl from '../img/homeImages/Girls/girl.png';
import girl1 from '../img/homeImages/Girls/girl-1.png';
import girl2 from '../img/homeImages/Girls/girl-2.png';

class Home extends Component {
  render() {
    return (
      <main>
        <div className="HomePage d-flex justify-content-end align-items-end">
            <button className="text-uppercase">shop men's collection</button>
        </div>
        
        <div className="container">
        <hr/>
            <div className="row">
                <div>
                    <ul className="nav nav-filter">
                        <li className="nav-item">
                            <a className="filter-link" href="/">POPULAR</a>
                        </li>
                        <li className="nav-item">
                            <a className="filter-link" href="/">NEW ARRIVALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="filter-link" href="/">BEST SELLERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="filter-link" href="/">SPECIAL OFFERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="filter-link" href="/">COMING SOON</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="model-wrapper d-flex justify-content-between flex-wrap col-12">

                    <div className="inner-model d-flex justify-content-center align-items-center flex-column flex-wrap col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="model-couple d-flex align-items-center flex-wrap w-100">
                            <div className="position-relative">
                                <img src={men} alt="Men Model 👨" className="img-fluid model" />
                                <p className="top-left"><sup>£</sup>89,99</p>
                            </div>
                            <div className="position-relative">
                                <img src={girl} alt="Girl Model 👩" className="img-fluid model" />
                                <p className="top-left"><sup>£</sup>47,50</p>
                            </div>
                        </div>
                        <div className="position-relative">
                            <img src={men1} alt="Men Model 👨" className="img-fluid model" />
                            <p className="single-top-left"><sup>£</sup>69,95</p>
                        </div>
                    </div>

                    <div className="inner-model d-flex justify-content-center align-items-center flex-column flex-wrap col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="position-relative">
                            <img src={men2} alt="Men Model 👨" className="img-fluid model"/>
                            <p className="single-top-left"><sup>£</sup>89,99</p>
                        </div>
                        <div className="model-couple d-flex align-items-center flex-wrap w-100">
                            <div className="position-relative">
                                <img src={girl1} alt="Girl Model 👩" className="img-fluid model"/>
                                <p className="top-left"><sup>£</sup>29,95</p>
                            </div>
                            <div className="position-relative">
                                <img src={girl2} alt=" Girl Model 👩" className="img-fluid model"/>
                                <p className="top-left"><sup>£</sup>4,70</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <Lookbooks />
            </div>
        </div>
      </main>
    );
  }
}

export default Home;