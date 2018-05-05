import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import Image1 from '../../static/images/works1.jpg';
import Image2 from '../../static/images/works2.jpg';
import './OurWorks.css';

export default class OurWorks extends Component {

  generateTenant() {
    const { content } = this.props;
    let tenant;
    if (content) {
      tenant = content.map((ten, index) => {
        return (
          <a href={"/tenant/" + ten.fields.slug} className="item" key={index}>
            { (ten.fields.featuredImage !== undefined) ? <img src={ten.fields.featuredImage.fields.file.url} width="100%"/> : <img src={Image1}/> }
            <div className="title">
              <h3>{ten.fields.tenantName}</h3>
            </div>
          </a>
        );
      })
      return tenant;
    }
  }

  render() {
    return ( 
      <div className="ourworks__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Works</h1>
            <div className="ourworks-container">
              {this.generateTenant()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
