import React, { Component } from 'react';
import LoaderGif from '../../static/images/loader.gif';
import './loader.css';

export default class Loader extends Component {

  render() {
    const { loading } = this.props;
    return ( 
      <div className={ 'loader-wrapper ' + ((loading) ? 'show' : 'hide') }>
        <img src={LoaderGif} alt="loader-gif"/>
      </div>
    );
  }
}
