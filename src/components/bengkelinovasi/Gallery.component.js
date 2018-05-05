import React, { Component } from 'react';
import Image2 from '../../static/images/works2.jpg';
import In1 from '../../static/images/inovasi1.jpg';
import In2 from '../../static/images/inovasi2.jpg';
import './Gallery.css';

export default class Gallery extends Component {

  render() {
    return ( 
      <div className="gallery__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Gallery</h1>
            <div className="gallery-container">
              <div className="item">
                <img src={In1}/>
                <div className="title">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              <div className="item">
                <img src={Image2}/>
                <div className="title">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
              <div className="item">
                <img src={In2}/>
                <div className="title">
                  <h3>Lorem Ipsum</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
