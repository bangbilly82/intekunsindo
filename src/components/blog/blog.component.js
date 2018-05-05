import React, { Component } from 'react';
import Contentful from '../../utils/Contentful';
import moment from 'moment';
import './blog.css';

export default class Blog extends Component {
  
  generateBlog() {
    const { content } = this.props;
    let blogs;
    if (content.length > 0) {
      blogs = content.slice(0, 3).map((blog, index) => {
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
    } else if (content.length === 0){
      return (
        <p className="text-center">No post yet!</p>
      )
    }
  }

  render() {
    return ( 
      <div className="blog__wrapper container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>From the Blog</h1>
            <div className="blog-container">
              {this.generateBlog()}
            </div>
            <div className="see-more">
              <a href="/blog"><button className="btn">See more from blog</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
