import React from 'react';

class Footer extends React.Component {
    render() {
      return (
          <footer>
            <div className="container mt-5 pt-4">
               <div className="row">

                <div className="footer-inner d-flex justify-content-between align-items-start flex-wrap w-100">
                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h6>INFORMATION</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">The Brand</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Local Stores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Customer Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Privacy & Cookies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Site Map</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h6>WHY BUY FROM US</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Shipping & Returns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Secure Shopping</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Award Winning</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Ethical trading</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h6>YOUR ACCOUNT</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">View Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">View Your Lookbook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Track an Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Update Information</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h6>LOOKBOOK</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Latest posts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Men's Lookbook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Women's Lookbook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Lookbook's RSS Feed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">View Your lookbook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Delete Your Lookbook</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h6>CONTACT DETAILS</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Head Office : Avenue Fashion,</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">180-182 Regent Street, London.</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Telephone : 0123-456-789</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pl-0" href="/">Email : support@yourwebsite.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

               </div>

               <div className="row">
                    <div className="d-flex justify-content-between align-items-center w-100 my-5 flex-wrap">
                        <div className="award col-lg-5 col-md-5 col-sm-12 col-12 p-3">
                            <h3 className="text-uppercase text-center text-white">award winner <br/>
                                <span>fashion awards 2016</span>
                            </h3>
                        </div>

                        <div className="social-media col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-around align-items-center">
                            <span><i className="fab fa-facebook-f text-white"></i></span>
                            <span><i className="fab fa-twitter text-white"></i></span>
                            <span><i className="fab fa-instagram text-white"></i></span>
                            <span><i className="fab fa-pinterest-p text-white"></i></span>
                        </div>
                    </div>
               </div>

            </div>

            <div className="container-fluid the-last">
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-between align-items-center w-100 avenue py-2">
                            <p className="text-white mb-0">© 2016 Avenue Fashion</p>
                            <p className="text-white mb-0">Design by RobbyDesigns.com &nbsp; Dev by Loremipsum.com</p>
                        </div>
                    </div>
                </div>
            </div>
          </footer>
      )
    }
  }

  export default Footer;