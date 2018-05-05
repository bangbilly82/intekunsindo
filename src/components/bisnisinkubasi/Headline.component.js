import React, { Component } from 'react';
import './Headline.css';

export default class Headline extends Component {

  render() {
    return ( 
      <div className="bisnisinkubasiheadline__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="headline-text">
              <h1>Inkubasi<br/>Bisnis</h1>
              <div className="description">
                <p>
                  Intek Unsindo adalah perusahaan yang bergerak di bidang engineering, manufaktur, dan industri. Intek Unsindo berusaha untuk memberikan kontribusi nyata terhadap perkembangan inovasi dan teknologi di Indonesia. Melalui programnya, INKUBASI BISNIS dan BENGKEL INOVASI, Intek Unsindo mencoba untuk mengakomodir inovasi- inovasi anak bangsa guna meningkatkan daya saing Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
