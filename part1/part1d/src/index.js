import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const History = props => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = props => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([]) // stores click history into an array


//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L')) // concat doesn't mutate the existing array which is highly NOT recommended in React state hooks
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }


//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text="left" />
//         <Button onClick={handleRightClick} text="right" />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10);

//   const handleClick = () => {
//     console.log('clicked the button');
//     setValue(0);
//   }

//   const hello = (who) => () => {
//       console.log("hello", who);
//     };
  

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   ) 
// };
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
