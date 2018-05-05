import React, { Component } from 'react';
import Image1 from '../../static/images/works1.jpg';
import Image2 from '../../static/images/works2.jpg';
import './works.css';

export default class Works extends Component {

  render() {
    return ( 
      <div className="works__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="works-container">
              <div className="item">
                <img src={Image1}/>
                <div className="title">
                  <h3>Bisnis<br />Incubator</h3>
                </div>
                <div className="detail">
                  <p>
                    Semenjak 2016, Intek Unsindo mendirikan sebuah inkubator bisnis berbasis teknologi untuk mengakomodir inovasi anak bangsa. Melalui Inkubasi Bisnis, Intek Unsindo akan membantu Anda dalam mengembangkan dan mengoptimalkan bisnis Anda.
                  </p>
                  <a href="/inkubasi-bisnis"><button className="btn">Show More</button></a>
                </div>
              </div>
              <div className="item">
                <img src={Image2}/>
                <div className="title">
                  <h3>Bengkel<br />Inovasi</h3>
                </div>
                <div className="detail">
                  <p>
                    Intek Unsindo bisa membantu Anda dalam bidang manufaktur melalui Bengkel Inovasi. Becak listrik, sepeda listrik, bus listrik hasil kerjasama dengan UNS, LIPI, INKA merupakan beberapa produk yang pernah kami produksi.
                  </p>
                  <a href="/bengkel-inovasi"><button className="btn">Show More</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
