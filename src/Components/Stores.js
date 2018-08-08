import React, { Component } from 'react';


class Stores extends Component {
  render() {
    return (
        <main>
            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="top-bg d-flex justify-content-center align-items-center">
                    <h1 className="text-uppercase text-center text-white centered">local stores<br/>
                      <span>find a store near you</span>
                    </h1>
                  </div>
                </div>
            </div>
            
            <div className="container country">
              <div className="row">
                <div className="destinations d-flex justify-content-between align-content-center flex-wrap my-5">

                  <div className="city london col-lg-4 col-md-4 col-sm-4 col-12">
                    <h3>london</h3>
                    <h6>180-182 Regent Street, London, W1B 5BT</h6>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing esi <br/> elit. Vivamus at arcu sem. Vestibulum ornare eleifendit <br/> massa, nec tempor odio. Fusce posuere nunc iaculis <br/> ligula viverra iaculis. Aliquam erat volutpat.
                    </p>
                    <button className="view-details text-uppercase">view details</button>
                  </div>

                  <div className="city col-lg-4 col-md-4 col-sm-4 col-12">
                    <h3>new york</h3>
                    <h6>109 Columbus Circle, New York, NY 10023</h6>
                    <p className="description">Nunc non posuere nisl. Etiam finibus vel dui nec lobor- <br/> tis. Aliquam egestas, sem quis condimentum venena- <br/> tis, erat leo fermentum dolor, non sollicitudin massa mi <br/> eu nibh. Nullam vitae aliquam dui, non sodales nisl.
                    </p>
                    <button className="view-details text-uppercase">view details</button>
                  </div>

                  <div className="city col-lg-4 col-md-4 col-sm-4 col-12">
                    <h3>paris</h3>
                    <h6>2133 Rue Saint-Honoré, 75001 Paris</h6>
                    <p className="description">Ut interdum fermentum blandit. Donec nec lacus egetit <br/> mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml <br/> auctor. Vestibulum ante ipsum primis in faucibus orcip <br/> luctus et ultrices posuere cubilia curae cras ligula.
                    </p>
                    <button className="view-details text-uppercase">view details</button>
                  </div>

                </div>
              </div>
            </div>

            {/* Goolge Map */}
            <div className="container-fluid">
              <div className="row">
                <div className="map d-flex justify-content-between align-items-center flex-wrap mb-5 w-100">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-0">
                    <iframe className="embed-responsive-item w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.04068490166!2d-0.14200518448415766!3d51.51246957963602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5767c9015%3A0x1cf0ab0381c7fd45!2s180+Regent+St%2C+Soho%2C+London+W1B+5TJ%2C+Royaume-Uni!5e0!3m2!1sfr!2sfr!4v1533718241070" height="330" frameborder="0" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div>
                      <h3>london</h3>
                      <h6>180-182 Regent Street, London, W1B 5BT</h6>
                      <p className="gps-state">Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. <br/> Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis <br/> ligula viverra iaculis. Aliquam erat volutpat.</p>
                    </div>

                    <div className="">
                      <p className="gps-state"><span><i class="fas fa-map-marker-alt"></i></span>&nbsp;&nbsp;180-182 Regent Street, London, W1B 5BT</p>
                      <p className="gps-state"><span><i class="fas fa-phone"></i></span>&nbsp;&nbsp;0123-456-789</p>
                      <p className="gps-state"><span><i class="fas fa-link"></i></span>&nbsp;&nbsp;www.yourwebsite.com</p>
                      <p className="gps-state"><span><i class="far fa-envelope"></i></span>&nbsp;&nbsp;support@yourwebsite.com</p>
                      <p className="gps-state"><span><i class="far fa-clock"></i></span>&nbsp;&nbsp;Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm</p>
                    </div>

                    <div className="social_media d-flex justify-content-around align-items-center w-50">
                      <a href="">
                        <span><i class="fab fa-facebook-f"></i></span>
                      </a>&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="">
                        <span><i class="fab fa-twitter"></i></span>
                      </a>&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="">
                        <span><i class="fab fa-instagram"></i></span>
                      </a>&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="">
                        <span><i class="fab fa-pinterest-p"></i></span>
                      </a>
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

export default Stores;