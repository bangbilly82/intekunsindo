import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../../action-creators/index';
import Contentful from '../../utils/Contentful';
import Loader from '../../components/loader/loader.component';
import Headline from '../../components/bengkelinovasi/Headline.component';
import Program from '../../components/bengkelinovasi/Program.component';
import OurWorks from '../../components/bengkelinovasi/OurWorks.component';

const mapStateToProps = (state) => {
  return {
    works: state.works
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWorksContent: (res) => {
      dispatch(actionCreators.getWorksContent(res));
    }
  }
}

class BengkelInovasiPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Contentful.getTenant('inovasi')
      .then((res) => {
        this.props.getWorksContent(res);
        this.setState({
          loading: false
        });
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

  render() {
    return ( 
      <div className="bengkel-intek__wrapper">
        <Headline />
        <Program />
        {this.generateWorks()}
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BengkelInovasiPage);
