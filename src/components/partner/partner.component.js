import React, { Component } from 'react';
import Inka from '../../static/images/partner/inka.JPG';
import Lipi from '../../static/images/partner/lipi.jpg';
import Rigen from '../../static/images/partner/rigensaranamukti.jpg';
import Uns from '../../static/images/partner/uns.jpeg';
import InkaMulti from '../../static/images/partner/inkamultisolusi.png';
import Ristek from '../../static/images/partner/ristek.png';
import './partner.css';

export default class Partner extends Component {

  render() {
    return ( 
      <div className="partner__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Partner</h1>
            <div className="partner-container">
              <div className="item">
                <img src={Inka}/>
              </div>
              <div className="item">
                <img src={Lipi}/>
              </div>
              <div className="item">
                <img src={Rigen}/>
              </div>
              <div className="item">
                <img src={Uns}/>
              </div>
              <div className="item">
                <img src={InkaMulti}/>
              </div>
              <div className="item">
                <img src={Ristek}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
