import React, { Component } from 'react';
import SignIn from '../Components/SignIn';
import Register from '../Components/Register';

class Connexion extends Component {
  render() {
    return (
        <main>
            <section>
              <div className="container-fluid">
                  <div className="row">
                    <div className="top-bg d-flex justify-content-center align-items-center">
                      <h1 className="text-uppercase text-center text-white centered">welcome to ave<br/>
                        <span>sign in or register</span>
                      </h1>
                    </div>
                  </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="connexions d-flex justify-content-between align-items-start flex-wrap mx-auto my-5">
                    <SignIn />
                    <Register />
                  </div>
                </div>
              </div>
            </section>
        </main>
          
    );
  }
}

export default Connexion;