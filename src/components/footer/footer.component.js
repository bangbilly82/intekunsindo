import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {

  render() {
    return ( 
      <div className="footer__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-wrapper">
              <div className="copyright">
                <p>Copyright <b>2017 Intek Unsindo</b></p>
                <p>Designed by Studibrandinc</p>
              </div>
              <div className="contact">
                <p>intekunsindo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
