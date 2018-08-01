import React, { Component } from 'react';

class TopElement extends Component {
    render() {
      return (
        <div className="top-element position-fixed w-100">
            <div className="container d-flex justify-content-between align-items-center">
                <form>
                    <label htmlFor="favoritefood" className="currency">Currency : &nbsp;</label>
                    <select name="currency" id="currency">
                        <option>GBP</option>
                        <option>EUR</option>
                        <option>XAF</option>
                        <option>USD</option>
                        <option>CAD</option>
                    </select>
                </form>

                <div>
                    <a href="/" className="connexion">Register</a> &nbsp; &nbsp;
                    <a href="/" className="connexion">Sign In</a> &nbsp; &nbsp;
                    <select id="mdb-select">
                        <option defaultValue="empty" data-icon="./img/shop.png">empty</option>
                        <option defaultValue="example 1" data-icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" className="rounded-circle">example 1</option>
                        <option defaultValue="example 2" data-icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle">example 2</option>
                        <option defaultValue="example 3" data-icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" className="rounded-circle">example 3</option>
                    </select>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default TopElement;