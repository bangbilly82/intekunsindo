import React, { Component } from 'react';
import Translate from '../../utils/Translate';
import './headline.css';

export default class Headline extends Component {

  render() {
    return ( 
      <div className="headline__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="headline-text">
              <h1>{Translate('headline-heading')}</h1>
              <div className="description">
                <p>
                  {Translate('headline-text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
