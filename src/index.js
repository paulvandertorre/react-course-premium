import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const people = ['Paul', 'Jan', 'Piet'];

  return (
    <ul>
      {people.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </ul>
  );
}

const Person = props => {
  const handlePersonClick = event => {
    console.log(props.person, event)
  }

  return <li onClick={handlePersonClick}>{props.person}</li>
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);

