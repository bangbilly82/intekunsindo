import React, { Component } from 'react';
import Image1 from '../../static/images/ibgallery4.JPG';
import Image2 from '../../static/images/ibgallery2.JPG';
import Image3 from '../../static/images/ibgallery3.JPG';
import './Gallery.css';

export default class Gallery extends Component {

  generateGallery() {
    const { content } = this.props;
    let gallery;
    if (content) {
      gallery = content.map((ten, index) => {
        return (
          <a href={"/gallery/" + ten.fields.slug} className="item" key={index}>
            { (ten.fields.featuredImage !== undefined) ? <img src={ten.fields.featuredImage.fields.file.url} width="100%"/> : <img src={Image1}/> }
            <div className="title">
              <h3>{ten.fields.tenantName}</h3>
            </div>
          </a>
        );
      })
      return gallery;
    }
  }

  render() {
    return ( 
      <div className="gallery__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Gallery</h1>
            <div className="gallery-container">
              {this.generateGallery()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
