import React from 'react'

const Header = (props) => {
  // console.log("header", props.name);
  return (
    <h2>{props.name}</h2>
  )
}

const Total = (props) => {
  // console.log(props);
  const sum = props.content.reduce((total, currentValue ) => {
    // console.log('what is happening', total, currentValue.exercises);
    return total + currentValue.exercises;
  }, 0);
  return(
    <p><strong>Number of exercises {sum}</strong></p>
  ); 
}

const Part = (props) => {
  // console.log('part props', props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  );
};

const Content = (props) => {
  // console.log('content props', props.content[0]);
  return (
    <div>
      {props.content.map((part) =>
          <Part key={part.id} part={part} />
      )}
    </div>
  );
};

const Course = props => {
  // console.log("course", props);
  return(
    <div>
      <Header name={props.course.name} />
      <Content content={props.course.parts} />
      <Total content={props.course.parts} />
    </div>  
  );
};



export default Course;
