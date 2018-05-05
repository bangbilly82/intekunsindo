import React, { Component } from 'react';
import Image1 from '../../static/images/works1.jpg';
import Image2 from '../../static/images/works2.jpg';
import Ib1 from '../../static/images/ibprogram1.jpg';
import Ib2 from '../../static/images/ibprogram2.jpg';
import Ib3 from '../../static/images/ibprogram3.jpg';
import Ib4 from '../../static/images/ibprogram4.jpg';
import Ib5 from '../../static/images/ibprogram5.jpg';
import './Program.css';

export default class Program extends Component {

  render() {
    return ( 
      <div className="programbisnis__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Programs</h1>
            <div className="programbisnis-container">
              <div className="item">
                <img src={Ib1}/>
                <div className="title">
                  <h3>Coaching</h3>
                </div>
                <div className="detail">
                  <h3>Coaching</h3>
                  <p>
                    Kembangkan bisnis Anda bersama dengan coach berpengalaman yang ada di Intek Unsindo. Adanya coach, bisa membantu Anda dalam menghadapi permasalahan bisnis yang ada.
                  </p>
                </div>
              </div>
              <div className="item mentoring">
                <img src={Ib2}/>
                <div className="title">
                  <h3>Mentoring</h3>
                </div>
                <div className="detail">
                  <h3>Mentoring</h3>
                  <p>
                    Pengembangan diri sangat penting dalam menjalankan bisnis. Program mentoring memberikan kesempatan tenant untuk belajar dari para expert. Di dalam program ini, tenant akan mendapatkan pengalaman dan pengetahuan dari orang-orang yang sudah berpengalaman di bidangnya.
                  </p>
                </div>
              </div>
            </div>
            <div className="programbisnis-container">
              <div className="item">
                <img src={Ib3}/>
                <div className="title">
                  <h3>Capacity<br/>Building</h3>
                </div>
                <div className="detail">
                  <h3>Capacity<br/>Building</h3>
                  <p>
                    Intek Unsindo menyediakan kegiatan berupa training serta workshop bagi para tenant. Program ini bertujuan untuk meningkatkan kapasitas serta skil tenant yang akan membantu tenant dalam menjalankan bisnisnya. Intek Unsindo memberikan workshop mengenai topik-topik yang berkaitan dengan bisnis, antara lain: HKI, marketing, branding, dll.
                  </p>
                </div>
              </div>
              <div className="item">
                <img src={Ib4}/>
                <div className="title">
                  <h3>Fasilitas<br/>Ruang Kerja</h3>
                </div>
                <div className="detail">
                  <h3>Fasilitas<br/>Ruang Kerja</h3>
                  <p>
                    Fasilitas ruang kantor, ruang diskusi, ruang meeting, dan workshop untuk para tenant Intek Unsindo
                  </p>
                </div>
              </div>
              <div className="item">
                <img src={Ib5}/>
                <div className="title">
                  <h3>Business<br/>Gathering</h3>
                </div>
                <div className="detail">
                  <h3>Business<br/>Gathering</h3>
                  <p>
                    Melalui program business gathering, Intek Unsindo memberikan kesempatan untuk tenant bisa berkumpul bersama stakeholder di dalam bisnisnya, seperti: pemerintah, pengusaha, masyarakat, dan investor. Program ini bertujuan untuk memperkuat networking tenant, memperkenalkan produk, dan juga memperoleh seed capital.
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
