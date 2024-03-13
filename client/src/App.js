const Team = require('./Components/Team/team');
const Teams = require('./Components/Team/teams');
const TeamForm = require('./Components/Team/teamForm');

const App = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col s12'>Menu</div>
      </div>
      <div className='row'>
        <div className='col s3'><Teams /></div>
        <div className='col s9'><Team /></div>
      </div>
      <div className='row'>
        <div className='col s12'><TeamForm /></div>
      </div>
    </div>
  );
}

module.exports = { App };
