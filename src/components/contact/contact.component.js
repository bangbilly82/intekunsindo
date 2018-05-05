import React, { Component } from 'react';
import config from '../../config/config';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './contact.css';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -7.545755, lng: 110.873799 }}
  >
    <Marker
      position={{ lat: -7.545755, lng: 110.873799 }}
    />
  </GoogleMap>
));

export default class ContactComponent extends Component {

  render() {
    return (
      <div className="contact__wrapper container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <h1>Contact Us</h1>
                <div className="address-wrapper">
                  <address>
                    <label>
                      Address : Jl. Ringroad Utara RT 02/XI, Ngringo, Jaten, Karanganyar, Jawa Tengah
                    </label>
                    <label>
                      Phone : 0857-2845-8816
                    </label>
                    <label>
                      Email : intekunsindo@gmail.com
                    </label>
                  </address>
                </div>
              </div>
              <div className="col-md-8">
                <MapWithAMarker
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMaps.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `300px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
                {/* <div className="comment">
                  <form action="http://localhost:5000" method="post">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Your Name" name="name"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" type="email" placeholder="Your Email" name="email"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Your Comment" name="comment" rows="6"></textarea>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Send Email</button>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
