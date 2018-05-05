import React, { Component } from 'react';
import { connect } from "react-redux";
import ContactComponent from '../../components/contact/contact.component';

import './ContactPage.scss';

const mapStateToProps = state => {
  return { content: state.content };
};

class ContactPage extends Component {

  render() {
    return ( 
      <div className="contact-page__wrapper">
        <ContactComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ContactPage);
