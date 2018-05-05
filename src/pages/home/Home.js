import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import Headline from '../../components/headline/headline.component';
import About from '../../components/about/about.component';
import Works from '../../components/works/works.component';
import Blog from '../../components/blog/blog.component';
import Partner from '../../components/partner/partner.component';
import Loader from '../../components/loader/loader.component';

import './Home.css';

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

class HomePage extends Component {

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

  generateBlog() {
    const { blog } = this.props;
    if (blog.posts !== null) {
      return (
        <Blog content={blog.posts} />
      )
    }
  }

  render() {  
    return ( 
      <div className="home-intek__wrapper">
        <Headline />
        <About />
        <Works />
        {this.generateBlog()}
        <Partner />
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
