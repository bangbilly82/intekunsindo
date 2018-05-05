import React, { Component } from 'react';
import { connect } from "react-redux";
import TeamComponent from '../../components/team/team.component';

import './Team.css';

const mapStateToProps = state => {
  return { content: state.content };
};

class Team extends Component {

  render() {
    return ( 
      <div className="team-intek__wrapper">
        <TeamComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Team);
