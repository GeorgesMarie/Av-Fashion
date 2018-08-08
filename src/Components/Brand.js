import React, { Component } from 'react';
import { View, Mask } from 'mdbreact';

// Import Images
import men from '../img/brandImages/men.png';
import women from '../img/brandImages/women.png';
import women1 from '../img/brandImages/women-1.png';
import sign from '../img/brandImages/sign.png';
import sign1 from '../img/brandImages/sign-1.png';
import sign2 from '../img/brandImages/sign-2.png';


class Brand extends Component {
  render() {
    return (
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="top-bg d-flex justify-content-center align-items-center">
                <h1 className="text-uppercase text-center text-white centered">the brand <br/>
                  <span>company slogan goes here</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="content my-5 d-flex justify-content-between align-items-center flex-wrap">

                <div className="left-part col-lg-6 col-md-6 col-sm-6 col-12">
                  <div><img src={men} alt="" className="img-fluid"/></div>
                  <div><img src={women} alt="" className="img-fluid my-3"/></div>
                  <h3>our values, vision and strategy</h3>
                  <h6>The above image would be a great place for an advertising video</h6>
                  <p className="description">Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare <br/> aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec <br/> sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare. <br/>
Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem <br/> Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.</p>
                </div>

                <div className="right-part col-lg-6 col-md-6 col-sm-6 col-12">
                  <h3>hand designed clothing</h3>
                  <h6>established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</h6>
                  <p className="description">Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim <br/> consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis <br/> disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un <br/> risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti <br/> rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
</p>
                  <div><img src={women1} alt="" className="img-fluid"/></div>
                  <h3 className="my-3">Ethical trading</h3>
                  <h6>we oversee the working conditions of the people in the supply chain</h6>
                  <p className="description">Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras <br/> dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem <br/>
Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. <br/> Cras viverra ullamcorper nunc accumsan hendrerit. <a href="" className="link">A link <span><i class="fas fa-long-arrow-alt-right"></i></span></a></p>
                  <div className="signature d-flex justify-content-between align-items-center">
                    <div><img src={sign} alt="" className="img-fluid"/></div>
                    <div><img src={sign1} alt="" className="img-fluid"/></div>
                    <div><img src={sign2} alt="" className="img-fluid"/></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Brand;