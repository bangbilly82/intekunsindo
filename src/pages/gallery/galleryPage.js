import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import Loader from '../../components/loader/loader.component';
import Tenant from '../../components/tenant/tenant.component';

const mapStateToProps = (state) => {
  return {
    works: state.works
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGalleryDetail: (res) => {
      dispatch(actionCreators.getGalleryDetail(res));
    }
  }
}

class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    Contentful.getGalleryDetailBySlug(params.slug)
      .then((res) => {
        this.props.getGalleryDetail(res);
        this.setState({
          loading: false
        });
      }, (err) => {
        console.log(err)
      })
  }

  generateWorks() {
    const { works } = this.props;
    if (works.gall !== null) {
      return (
        <Tenant content={works.gall}/>
      )
    }
  }

  render() {
    return ( 
      <div className="tenant-detail__wrapper">
        {this.generateWorks()}
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
