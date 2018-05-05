import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import BlogPost from '../../components/blogPost/blogPost.component';
import Loader from '../../components/loader/loader.component';

const mapStateToProps = (state) => {
  return {
    blog: state.blog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogContent: (res) => {
      dispatch(actionCreators.fetchBlogContent(res));
    }
  }
}

class BlogPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Contentful.getBlogPost()
    .then((res) => {
      this.props.getBlogContent(res);
      this.setState({
        loading: false
      });
    })
  }

  hideLoader(id) {
    this.setState({
      loading: id
    })
  }

  generateBlog() {
    const { blog } = this.props;
    if (blog.posts !== null) {
      return (
        <BlogPost content={blog.posts}/>
      )
    }
  }

  render() {
    return ( 
      <div className="blog-intek__wrapper">
        {this.generateBlog()}
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
