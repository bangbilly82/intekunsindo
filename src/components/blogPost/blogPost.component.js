import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import moment from 'moment';
import './blogPost.css';

export default class BlogPost extends Component {

  generateBlog() {
    const { content } = this.props;
    let blogs;
    if (content.length > 0) {
      blogs = content.map((blog, index) => {
        return (
          <div key={index} className="blog">
            <div className="blog-image">
              { (blog.fields.featuredImage !== undefined) ? <img src={blog.fields.featuredImage.fields.file.url} width="100%"/> : null }
            </div>
            <div className="blog-detail">
              <a href={"/article/detail/" + blog.fields.slug}>
                <h4>{blog.fields.title}</h4>
              </a>
              <span>{moment(blog.sys.createdAt).format("D MMMM YYYY")}</span>
              <p>{blog.fields.headlineText}</p>
            </div>
          </div>
        );
      })
      return blogs;
    } else if (content.length === 0) {
      return (
        <p>No post yet!</p>
      )
    }
  }

  render() {
    return ( 
      <div className="blogpost__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <h1>Blog Post</h1>
              </div>
              <div className="col-md-8">
                <div className="blogpost-container">
                  {this.generateBlog()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
