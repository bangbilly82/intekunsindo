import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import moment from 'moment';
import Image1 from '../../static/images/ibgallery1.JPG';
import ReactMarkdown from 'react-markdown';
import Lightbox from 'react-images';
import './tenant.css';

export default class Tenant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    }
    this.gallery = [];
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

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

  generateImageDetail() {
    const { content } = this.props;
    let images;
    const gallery = [];
    if (content && content.items[0].fields.image) {
      images = content.items[0].fields.image.map((image, index) => {
        gallery.push({
          src: `https:${image.fields.file.url}`
        });
        return (
          <div className="col-md-4" key={index}>
            <img src={image.fields.file.url} width="100%" onClick={(e) => this.openLightbox(index, e)}/>
          </div>
        )
      })
      this.generateLightBox(gallery);
      return images;
    }
  }

  generateLightBox(images) {
    if (images !== undefined) {
      this.gallery = images;
    }
  }

  hideLoader() {
    this.props.hideLoader(false);
  }

  openLightbox(index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
  }
  
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
  }
  
  gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }

  gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }

  render() {
    const { lightboxIsOpen, currentImage } = this.state;
    return ( 
      <div className="tenant-detail__wrapper container">
        <div className="row">
          <div className="col-md-12">
            {this.generateDescription()}
            <div className="row image-wrapper">
              {this.generateImageDetail()}
              {(this.gallery.length > 0) ? 
              <Lightbox
                currentImage={currentImage}
                images={this.gallery}
                isOpen={lightboxIsOpen}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                onClose={this.closeLightbox}
              /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
