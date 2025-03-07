import './App.css';
import Teams from './CollegeBasketballTeams.json'; // Gets team data from .json file

function Welcome() {
  // Welcome message component
  return (
    <>
      <h1>March Madness Info Website</h1>
      <h4>We list all NCAA basketball teams!</h4>
    </>
  );
}

function Team({
  // A team card. Prop names match JSON data names for mapping purposes.
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>School Name: {school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

function TeamList() {
  // A list of all team cards for teams in JSON file
  return (
    <>
      {/* Creates a team card for every team in JSON file */}
      {Teams.teams.map((singleTeam) => (
        <>
          <Team {...singleTeam} />
          <br />
        </>
      ))}
    </>
  );
}

function App() {
  // Overall structure of the website
  return (
    <>
      <Welcome />
      <br />
      <TeamList />
    </>
  );
}

export default App;
