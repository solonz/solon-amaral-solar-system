import React from 'react';
// import PropTypes from 'prop-types';
import Header from './components/Header';
import MissionsResult from './components/Missions';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <MissionsResult />
      </>
    );
  }
}

export default App;
