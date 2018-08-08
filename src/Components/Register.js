import React from 'react';
import { Input } from 'mdbreact';

class Register extends React.Component  {
  render() {
    return(
        <form className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3>register</h3>
            <div className="grey-text">
                <Input label="Your Email"  group type="email" validate error="wrong" success="right"/>
                <Input label="Your Password"  group type="password" validate/>
                <Input label="Confirm Password"  group type="password" validate/>
            </div>

            <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="materialInline1"/>
                <label className="form-check-label exclu" htmlFor="materialInline1">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
            </div>
            
            <div className="text-center clearfix">
                <button className="btn-register text-uppercase float-left" type="submit">register</button>
                <p className="text-right float-right checkbox-text">By clicking ‘Create Account’, you <br/>
                    agree to our <a href="" className="infos">Privacy Policy <span><i className="fas fa-long-arrow-alt-right"></i></span></a>
                </p>
            </div>
        </form>
    );
  }
};

export default Register;