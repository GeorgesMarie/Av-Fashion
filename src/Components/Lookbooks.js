import React, { Component } from 'react';


import girllookbook from '../img/homeImages/Girls/girl-lookbook.png';
import menlookbook from '../img/homeImages/Mens/men-lookbook.png';
import photosilhouette from '../img/homeImages/Mens/photo-silhouette.png'

class Lookbooks extends Component {
    render() {
        return(
            <div className="lookbooks d-flex justify-content-between align-items-center flex-wrap my-4">
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
        );
    }
}

export default Lookbooks;