import React from 'react';
import Header from './components/Header';
import MissionsResult from './components/Missions';
import SolarSystem from './components/SolarSystem';

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
