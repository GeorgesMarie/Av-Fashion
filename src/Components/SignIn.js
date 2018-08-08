import React from 'react';
import { Input } from 'mdbreact';

class SignIn extends React.Component  {
  render() {
    return(
        <form className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3>sign in</h3>
            <div className="grey-text">
                <Input label="Your Email"  group type="email" validate error="wrong" success="right"/>
                <Input label="Your Password"  group type="password" validate/>
            </div>
            <div className="text-center clearfix">
                <button className="btn-sign text-uppercase float-left mb-3" type="submit">sign in</button>
                <a href="" className="float-right text-center infos text-capitalize">forgot your password &nbsp;
                    <span><i className="fas fa-long-arrow-alt-right"></i></span>
                </a>
            </div>
        </form>
    );
  }
};

export default SignIn;