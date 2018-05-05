import React, { Component } from 'react';
import Translate from '../../utils/Translate';
import './about.css';

export default class About extends Component {

  render() {
    return ( 
      <div className="about__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="about-text">
              <h1>{Translate('why-us')}</h1>
              <p>
                {Translate('about-text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
