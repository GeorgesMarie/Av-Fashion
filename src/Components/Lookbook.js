import React, { Component } from 'react';
import Lookbooks from './Lookbooks';

// Import Images
import men from '../img/lookbook/Mens/men.png'
import men1 from '../img/lookbook/Mens/men-1.png'
import men2 from '../img/lookbook/Mens/men-2.png'

import girl from '../img/lookbook/Girls/girl.png'
import girl1 from '../img/lookbook/Girls/girl-1.png'
import girl2 from '../img/lookbook/Girls/girl-2.png'
import girl3 from '../img/lookbook/Girls/girl-3.png'
import girl4 from '../img/lookbook/Girls/girl-4.png'
import win from '../img/win.png';

class Lookbook extends Component {
    render() {
        return(
            <main>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="top-bg d-flex justify-content-center align-items-center">
                            <h1 className="text-uppercase text-center text-white centered">our lookbook<br/>
                                <span>latest posts - mens & womens</span>
                            </h1>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <hr/>
                        <div className="row">
                            <div>
                                <ul className="nav nav-filter">
                                    <li className="nav-item">
                                        <a className="filter-link" href="/">LATEST</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="filter-link" href="/">MOST LIKED</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="filter-link" href="/">BEST SELLERS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="filter-link" href="/">PRICE LOW TO HIGH</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="filter-link" href="/">PRICE HIGH TO LOW</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="wrapper-container w-100">
                                {/* Top Part */}
                                <div className="top-part d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="d-flex justify-content-between align-items-center col-lg-6">
                                        <div className="position-relative">
                                            <img src={men2} alt="Men Model 👨" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>M1
                                            </p>
                                        </div>
                                        <div className="position-relative">
                                            <img src={girl4} alt="Girl Model 👩" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>W1
                                            </p>
                                        </div>
                                    </div>

                                    <div className="jane col-lg-6">
                                        <h4 className="text-uppercase">jane's <span>lookbook</span></h4>
                                        <p><span className="text-uppercase font-weight-bold">get the look for under £200!</span> <br/>
                                            <span className="my-3 d-block">We invited actress Jane Marshall to join us <br/>
                                                    for the day and choose her perfect outfit from <br/>
                                                    our vast range of womens fashion.
                                            </span>
                                            <span className="d-block">This is of course not true as this is just a design <br/>
                                                    for a website and this is simply filler text.
                                            </span>
                                        </p>
                                        <button className="btn-view text-uppercase">view now</button>
                                    </div>
                                </div>
                                {/* /Top Part */}

                                {/* Middle Part */}
                                <div className="middle-part d-flex justify-content-between align-items-center flex-wrap my-4">
                                    <div className="d-flex justify-content-between align-items-center col-lg-6">
                                        <div className="position-relative">
                                            <img src={men} alt="Men Model 👨" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>MJ1</p>
                                        </div>
                                        <div className="position-relative">
                                            <img src={men1} alt="Men Model 👩" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>M2</p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center col-lg-6 p-0">
                                        <div className="position-relative">
                                            <img src={girl3} alt="Girl Model 👨" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>W2</p>
                                        </div>
                                        <div className="position-relative">
                                            <img src={girl2} alt="Girl Model 👩" className="img-fluid lb-model"/>
                                            <p className="reference"><sup>REF</sup>W3</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Middle Part */}

                                {/* Last Part */}
                                <div className="last-part d-flex justify-content-between align-items-center flex-wrap mb-4">
                                    <div className="new-look col-lg-9 d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <h4 className="text-uppercase">win <span>a new look</span></h4>
                                            <p className=""><span>add looks or items to your lookbook for a chance of winning </span> <br/>
                                            <span className="d-block my-1">See an item or a complete look you like, click the  button to add it to your <br/>
                                            lookbook and you’ll be automatically entered to our monthly draw where <br/>
                                            one winner gets a £300 gift voucher to spend on our website! </span>
                                            <span>Terms: No purchase necessary. Vouchers are non-transferable and no <br/>
                                            cash alternative is ofered. Competition is for members only.</span>
                                            </p>
                                            <button className="btn-shop text-uppercase">shop now</button>
                                            <br/>
                                            <br/>
                                            <p>Terms: No purchase necessary. Vouchers are non-transferable and no cash option is given. <br/>
                                            You must be 18 or over to be eligible. Competition is for members only and is drawn at random. </p>
                                        </div>
                                        <img src={win} alt="Winner Logo" className="img-fluid winner-logo"/>
                                    </div>
                                    <div className="position-relative col-lg-3">
                                        <img src={girl1} alt="Girl Model 👨" className="img-fluid lb-model"/>
                                        <p className="reference"><sup>REF</sup>W4</p>
                                    </div>
                                </div>
                                {/* /Last Part */}
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <Lookbooks />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Lookbook;