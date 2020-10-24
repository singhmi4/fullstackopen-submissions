import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = props => (
  <h1>{props.text}</h1>
)

const Anecdote = props => (
  <div>
    {props.quote}
  </div>
)

const Vote = props => (
  <div>
    has {props.vote}
  </div>
)

const Button = props => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = props => {
  // console.log(props);
  const [selected, setSelected] = useState(0);

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random()*props.anecdotes.length));
    // console.log('anecdote', selected);
  }

  const [points, setPoints] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0));
  
  const handleVote = () => {
    const copy = [...points];
    copy[selected]++;
    console.log('voted!');
    setPoints(copy); // this code allows us to render the updated points array
    console.log(copy);
  }

  return (
    <div>
      <Header text="Anecdote of the Day" />
      <Anecdote quote={props.anecdotes[selected]} />
      <Vote vote={points[selected]} />
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={changeAnecdote} text="next anecdote" />
      </div>
      <Header text="Anecdote with most votes" />
      <Anecdote quote={props.anecdotes[points.indexOf(Math.max(...points))]} />
      <Vote vote={Math.max(...points)} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);