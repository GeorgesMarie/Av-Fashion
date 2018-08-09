import React, { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View } from 'mdbreact';

// Import Images 
import slide from '../img/product/slide.png';
import slide1 from '../img/product/slide-1.png';

class Product extends Component {
  render() {
    return(
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="top-bg d-flex justify-content-center align-items-center">
                <h1 className="text-uppercase text-center text-white centered">product view<br/>
                  <span>mens - casuals - hoodies & sweatshirts - <span className="ave">ave classic sweatshirt</span></span>
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {/* Carousel */}
              <div className="slider col-lg-6 col-md-6 col-sm-12 col-12">
                <Carousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={false}
                className="z-depth-1">
                <CarouselInner>
                  <CarouselItem itemId="1">
                    <View>
                      <img className="d-block w-100" src={slide} alt="First slide" />
                    </View>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <View>
                      <img className="d-block w-100" src={slide1} alt="Second slide" />
                    </View>
                  </CarouselItem>
                </CarouselInner>
              </Carousel>
              </div>
              {/* /Carousel */}

              <div className="crsl-details col-lg-6 col-md-6 col-sm-12 col-12">
                <h3>Ave classic sweatshirt</h3>
                <p>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span> &nbsp;
                  <span>3 Review(s)</span>&nbsp; | &nbsp;
                  <span>Add a Review</span>&nbsp; | &nbsp;
                  <span>Share : &nbsp;
                    <i class="fab fa-facebook-f"></i>&nbsp;&nbsp;
                    <i class="fab fa-twitter"></i>&nbsp;&nbsp;
                    <i class="fab fa-google-plus-g"></i>&nbsp;&nbsp;
                    <i class="fab fa-pinterest-p"></i>&nbsp;&nbsp;
                    <i class="fab fa-instagram"></i>&nbsp;&nbsp;
                    <i class="far fa-envelope"></i>&nbsp;&nbsp;
                  </span>
                </p>
                
                <p><sup>£</sup><span className="linetrough">107</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <sup>£</sup><span>89,99</span>
                </p>

                <p className="mb-0"><span className="font-weight-bold">Availability</span> : <span>In stock</span></p>
                <p className="mb-0"><span className="font-weight-bold">Product Code</span> : <span> #499577</span></p>
                <p className="mb-0"><span className="font-weight-bold">Tags</span> : <span className="ave">Classic, Casual, V-neck, Loose</span></p>

                <p>Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est <br/> congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar <br/> tempor lorem a pretium justo interdum.</p>
                <p className="mb-0">- Elasticated cuffs</p>
                <p className="mb-0">- Casual fit</p>
                <p className="mb-0">- 100% Cotton</p>
                <p>- Free shipping with 4 days delivery</p>

                
                <form action="">
                  <div className="selections d-flex flex-wrap">
                    <div>
                        <label htmlFor="COLOUR">COLOUR</label> <br/>
                        <select name="colour" id="colour" class="browser-default">
                          <option value="" disabled selected>Select Colour</option>
                          <option value="1">Blue</option>
                          <option value="2">Black</option>
                          <option value="3">White</option>
                          <option value="4">Red</option>
                        </select>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label htmlFor="SIZE">SIZE</label> <br/>
                        <select name="size" id="size" class="browser-default">
                          <option value="" disabled selected>Select Size</option>
                          <option value="1">M</option>
                          <option value="2">L</option>
                          <option value="3">XL</option>
                        </select>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label htmlFor="QTY">QTY</label> <br/>
                        <input type="number" name="quantity" min="1" max="10" placeholder="1" />
                      </div>
                  </div>
                </form>

                <div className="mt-4">
                  <button><i class="fas fa-shopping-cart"></i> &nbsp; ADD TO CART</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button><i class="far fa-heart"> &nbsp; ADD TO LOOKBOOK</i></button>
                </div>

                <p className="mt-5"><i class="fas fa-exchange-alt"></i> ADD TO COMPARE</p>
              </div>

      

            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Product;