import React from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {''}
        {
          missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))
        }
      </div>
    );
  }
}

export default Missions;
