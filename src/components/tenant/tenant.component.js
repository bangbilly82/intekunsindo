import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import moment from 'moment';
import Image1 from '../../static/images/ibgallery1.JPG';
import ReactMarkdown from 'react-markdown';
import './tenant.css';

export default class Tenant extends Component {

  generateDescription() {
    const { content } = this.props;
    let tenant;
    if (content) {
      tenant = content.items.map((ten, index) => {
        return (
          <div key={index} className="description">
            { (ten.fields.featuredImage !== undefined) ? <img src={ten.fields.featuredImage.fields.file.url} width="100%"/> : null }
            <h3>{ten.fields.tenantName}</h3>
            <ReactMarkdown source={ten.fields.description} />
          </div>
        );
      })
      return tenant;
    }
  }

  hideLoader() {
    this.props.hideLoader(false);
  }

  render() {
    return ( 
      <div className="tenant-detail__wrapper container">
        <div className="row">
          <div className="col-md-12">
            {this.generateDescription()}
          </div>
        </div>
      </div>
    );
  }
}
