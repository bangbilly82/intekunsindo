import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import Loader from '../../components/loader/loader.component';
import BlogDetail from '../../components/blogdetail/blogDetail.component';

const mapStateToProps = (state) => {
  return {
    blog: state.blog
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogDetail: (res) => {
      dispatch(actionCreators.getBlogDetail(res));
    }
  }
}

class BlogDetailPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    Contentful.getBlogPostBySlug(params.slug)
    .then((res) => {
      this.props.getBlogDetail(res);
      this.setState({
        loading: false
      });
    })
  }

  generatePost() {
    const { blog } = this.props;
    if (blog.post !== null) {
      return (
        <BlogDetail content={blog.post}/>
      );
    }
  }

  render() {
    return ( 
      <div className="blog-detail-page__wrapper">
        {this.generatePost()}
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailPage);
