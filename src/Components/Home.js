import React, { Component } from 'react';

// Import Images
import men from '../img/homeImages/Mens/men.png';
import men1 from '../img/homeImages/Mens/men-1.png';
import men2 from '../img/homeImages/Mens/men-2.png';
import menlookbook from '../img/homeImages/Mens/men-lookbook.png';
import photosilhouette from '../img/homeImages/Mens/photo-silhouette.png'

import girl from '../img/homeImages/Girls/girl.png';
import girl1 from '../img/homeImages/Girls/girl-1.png';
import girl2 from '../img/homeImages/Girls/girl-2.png';
import girllookbook from '../img/homeImages/Girls/girl-lookbook.png';

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
                            <img src={men} alt="Men Model 👨" className="img-fluid model" />
                            <img src={girl} alt=" Girl Model 👩" className="img-fluid model" />
                        </div>
                        <img src={men1} alt="Men Model 👨" className="img-fluid model" />
                    </div>

                    <div className="inner-model d-flex justify-content-center align-items-center flex-column flex-wrap col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={men2} alt="Men Model 👨" className="img-fluid model"/>
                        <div className="model-couple d-flex align-items-center flex-wrap w-100">
                            <img src={girl1} alt="Girl Model 👩" className="img-fluid model"/>
                            <img src={girl2} alt=" Girl Model 👩" className="img-fluid model"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="lookbooks d-flex justify-content-between align-items-center flex-wrap">
                    <div className="look_book d-flex justify-content-around align-items-center col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src={menlookbook} alt="Men Model 👨" className="img-fluid lb-image"/>
                        <div className="description">
                            <h2 className="text-uppercase text-right">men's <br/>
                                <span>lookbook</span>
                            </h2>
                            <p className="text-right">Lorem ipsum dolor sit amet eras facilisis <br/>
                                consectetur adipiscing elit lor, integer lorem <br/>
                                consecteur dignissim laciniqui. <br/>
                                Elementum metus facilisis ut phasellu.
                            </p>
                            <button className="text-uppercase text-white float-right">view now</button>
                        </div>
                    </div>

                    <div className="look_book d-flex justify-content-around align-items-center col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src={girllookbook} alt="Men Model 👨" className="img-fluid lb-image"/>
                        <div className="description">
                            <h2 className="text-uppercase text-right">women's <br/>
                                <span>lookbook</span>
                            </h2>
                            <p className="text-right">Lorem ipsum dolor sit amet eras facilisis <br/>
                                consectetur adipiscing elit lor, integer lorem <br/>
                                consecteur dignissim laciniqui. <br/>
                                Elementum metus facilisis ut phasellu.
                            </p>
                            <button className="text-uppercase text-white float-right">view now</button>
                        </div>
                    </div>

                    <div className="look_book d-flex justify-content-around align-items-center col-lg-4 col-md-4 col-sm-12 col-12">
                        <img src={photosilhouette} alt="Men Model 👨" className="img-fluid lb-image"/>
                        <div className="description">
                            <h2 className="text-uppercase text-right">your <br/>
                                <span>lookbook</span>
                            </h2>
                            <p className="text-right">Lorem ipsum dolor sit amet eras facilisis <br/>
                                consectetur adipiscing elit lor, integer lorem <br/>
                                consecteur dignissim laciniqui. <br/>
                                Elementum metus facilisis ut phasellu.
                            </p>
                            <button className="text-uppercase text-white float-right">view now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
}

export default Home;