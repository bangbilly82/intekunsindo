import React, { Component } from 'react';
import Image1 from '../../static/images/works1.jpg';
import Image2 from '../../static/images/works2.jpg';
import Ib3 from '../../static/images/ibprogram3.jpg';
import Ib4 from '../../static/images/ibprogram4.jpg';
import Ib5 from '../../static/images/ibprogram5.jpg';
import './Program.css';

export default class Program extends Component {

  render() {
    return ( 
      <div className="program__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Programs</h1>
            <div className="program-container">
              <div className="item">
                <img src={Ib3}/>
                <div className="title">
                  <h3>Manufaktur<br />Metal</h3>
                </div>
                <div className="detail">
                  <h3>Manufaktur<br/>Metal</h3>
                  <p>
                    Bengkel Inovasi Intek Unsindo bisa membantu Anda dalam memproduksi barang-barang berbahan dasar metal.
                  </p>
                </div>
              </div>
              <div className="item">
                <img src={Ib4}/>
                <div className="title">
                  <h3>Manufaktur<br />Fiber</h3>
                </div>
                <div className="detail">
                  <h3>Manufaktur<br/>Fiber</h3>
                  <p>
                    Bengkel Inovasi Intek Unsindo bisa membantu Anda dalam memproduksi barang-barang berbahan dasar fiber.
                  </p>
                </div>
              </div>
              <div className="item">
                <img src={Ib5}/>
                <div className="title">
                  <h3>Jasa<br />Pemesinan</h3>
                </div>
                <div className="detail">
                  <h3>Jasa<br/>Pemesinan</h3>
                  <p>
                    Dengan teknologi yang kami miliki, kami bisa membantu Anda dalam memproduksi mesin-mesin yang Anda perlukan. Tidak hanya proses produksi, kami juga bisa membantu Anda dalam mendesain mesin yang Anda butuhkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
