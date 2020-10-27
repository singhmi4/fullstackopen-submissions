import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Total = (props) => {
  // console.log(props);
  const sum = props.content.reduce((total, currentValue ) => {
    // console.log('what is happening', total, currentValue.exercises);
    return total + currentValue.exercises;
  }, 0);
  return(
    <p>Number of exercises {sum}</p>
  ); 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  );
}

const Content = (props) => {
  // console.log(props);
  return (
    <div>
      <Part part={props.content[0]} />
      <Part part={props.content[1]} />
      <Part part={props.content[2]} />
    </div>
  );
}

const Course = props => {
  console.log(props);
  return(
    <div>
      <Header name={props.course.name} />
      <Content content={props.course.parts} />
      <Total content={props.course.parts} />
    </div>  
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))