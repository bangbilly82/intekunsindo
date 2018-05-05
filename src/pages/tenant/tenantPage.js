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
    getWorksDetail: (res) => {
      dispatch(actionCreators.getWorksDetail(res));
    }
  }
}

class TenantPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { params } = this.props.match;
    Contentful.getTenantDetailBySlug(params.slug)
      .then((res) => {
        this.props.getWorksDetail(res);
        this.setState({
          loading: false
        });
      }, (err) => {
        console.log(err)
      })
  }

  generateWorks() {
    const { works } = this.props;
    if (works.work !== null) {
      return (
        <Tenant content={works.work}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TenantPage);
