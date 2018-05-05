import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './blogDetail.css';

export default class BlogDetail extends Component {

  generateDescription() {
    const { content } = this.props;
    let posts;
    if (content) {
      posts = content.items.map((post, index) => {
        document.title = post.fields.title;
        return (
          <div key={index} className="description">
            <h3 className="title">{post.fields.title}</h3>
            <span className="date">{moment(post.sys.createdAt).format("D MMMM YYYY")}</span>
            <div className="blog-image">
              { (post.fields.featuredImage !== undefined) ? <img src={post.fields.featuredImage.fields.file.url} width="100%"/> : null }
            </div>
            <ReactMarkdown source={post.fields.posts} />
          </div>
        );
      })
      return posts;
    }
  }

  render() {
    return ( 
      <div className="blog-detail__wrapper container">
        <div className="row">
          <div className="col-md-12">
            {this.generateDescription()}
          </div>
        </div>
      </div>
    );
  }
}
