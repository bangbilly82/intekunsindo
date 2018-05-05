import React, { Component } from 'react';
import Image1 from '../../static/images/ibgallery4.JPG';
import Image2 from '../../static/images/ibgallery2.JPG';
import Image3 from '../../static/images/ibgallery3.JPG';
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
                <img src={Image1}/>
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
                <img src={Image3}/>
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
