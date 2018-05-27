import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import Loader from '../../components/loader/loader.component';

import Headline from '../../components/bisnisinkubasi/Headline.component';
import Program from '../../components/bisnisinkubasi/Program.component';
import OurWorks from '../../components/bisnisinkubasi/OurWorks.component';
import Gallery from '../../components/bisnisinkubasi/Gallery.component';

const mapStateToProps = (state) => {
  return {
    works: state.works
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWorksContent: (res) => {
      dispatch(actionCreators.getWorksContent(res));
    },
    getWorksGallery: (res) => {
      dispatch(actionCreators.getWorksGallery(res));
    }
  }
}

class BisnisInkubasiPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Contentful.getTenant('bisnis')
      .then((res) => {
        this.props.getWorksContent(res);
        this.setState({
          loading: false
        });
      }, (err) => {
        console.log(err)
      })
    Contentful.getGallery()
      .then((res) => {
        this.props.getWorksGallery(res);
      })
  }

  generateWorks() {
    const { works } = this.props;
    if (works.works !== null) {
      return (
        <OurWorks content={works.works}/>
      )
    }
  }

  generateGallery() {
    const { works } = this.props;
    if (works.gallery !== null) {
      return (
        <Gallery content={works.gallery}/>
      )
    }
  }

  render() {
    return ( 
      <div className="bisnis-intek__wrapper">
        <Headline />
        <Program />
        {this.generateWorks()}
        {this.generateGallery()}
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BisnisInkubasiPage);
