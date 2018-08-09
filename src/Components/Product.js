import React, { Component } from 'react';

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
            <div className="row mt-5">
              {/* Carousel */}
              <div id="carouselExampleControls" className="carousel slide col-lg-6" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src={slide} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src={slide1} alt="Second slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* /Carousel */}

              <div className="crsl-details col-lg-6 col-md-6 col-sm-12 col-12">
                <h3>Ave classic sweatshirt</h3>
                <p>
                  <span className="star-1 star"><i class="fas fa-star"></i></span>
                  <span className="star-2 star"><i class="fas fa-star"></i></span>
                  <span className="star-3 star"><i class="fas fa-star"></i></span>
                  <span className="star-4 star"><i class="fas fa-star"></i></span>
                  <span className="star-5 star"><i class="fas fa-star"></i></span> &nbsp;
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

                <p className="properties mt-2">Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est <br/> congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar <br/> tempor lorem a pretium justo interdum.</p>
                <p className="mb-0">- Elasticated cuffs</p>
                <p className="mb-0">- Casual fit</p>
                <p className="mb-0">- 100% Cotton</p>
                <p>- Free shipping with 4 days delivery</p>

                
                <form action="">
                  <div className="selections d-flex flex-wrap">
                    <div>
                        <label htmlFor="COLOUR" className="font-weight-normal">COLOUR</label> <br/>
                        <select name="colour" id="colour" dir="ltr">
                          <option value="" disabled selected>Select Colour</option>
                          <option value="1">Blue</option>
                          <option value="2">Black</option>
                          <option value="3">White</option>
                          <option value="4">Red</option>
                        </select>
                    </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <label htmlFor="SIZE" className="font-weight-normal">SIZE</label> <br/>
                      <select name="size" id="size">
                        <option value="" disabled selected>Select Size</option>
                        <option value="1">M</option>
                        <option value="2">L</option>
                        <option value="3">XL</option>
                      </select>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <label htmlFor="QTY" className="font-weight-normal">QTY</label> <br/>
                      <input type="number" name="quantity" min="1" max="10" placeholder="1" id="quantity" />
                    </div>
                  </div>
                </form>

                <div className="mt-5">
                  <button className="btn-add"><i className="fas fa-shopping-cart"></i> &nbsp; ADD TO CART</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn-add"><i className="fas fa-heart"></i> &nbsp; ADD TO LOOKBOOK</button>
                </div>

                <p className="mt-5"><i className="fas fa-exchange-alt"></i> ADD TO COMPARE</p>
              </div>

              <div className="w-100 mt-4">
                <ul className="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">

                  <li className="nav-item active-tab">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-selected="true">DESCRIPTION</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="false">VIDEO</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-size" role="tab" aria-controls="pills-size" aria-selected="false">SIZE & PECS</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-delivery" role="tab" aria-controls="pills-delivery" aria-selected="false">DELIVERY & RETURNS</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="false">REVIEWS</a>
                  </li>

                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                    <h3>Description</h3>
                    <p className="properties">Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis <br/> porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id <br/> vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.</p>
                    <p className="properties">Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec <br/> fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volut- <br/> pat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam <br/> varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam <br/> pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere <br/> mauris, in aliquet lorem eros eget neque.</p>
                  </div>

                  <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                    <h3>Video</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5P31UruORjg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-size" role="tabpanel" aria-labelledby="pills-size-tab">
                    <h3>Size</h3>
                      <p className="properties">Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis <br/> porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id <br/> vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.</p>
                      <p className="properties">Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec <br/> fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volut- <br/> pat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam <br/> varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam <br/> pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere <br/> mauris, in aliquet lorem eros eget neque.</p>
                  </div>

                  <div className="tab-pane fade" id="pills-delivery" role="tabpanel" aria-labelledby="pills-delivery-tab">
                    <h3>Delivery</h3>
                      <p className="properties">Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis <br/> porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id <br/> vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.</p>
                      <p className="properties">Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec <br/> fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volut- <br/> pat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam <br/> varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam <br/> pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere <br/> mauris, in aliquet lorem eros eget neque.</p>
                  </div>

                  <div className="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                    <h3>Reviews</h3>
                      <p className="properties">Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis <br/> porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id <br/> vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus.</p>
                      <p className="properties">Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec <br/> fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volut- <br/> pat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam <br/> varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam <br/> pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere <br/> mauris, in aliquet lorem eros eget neque.</p>
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

export default Product;