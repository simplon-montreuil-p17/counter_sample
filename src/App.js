import React from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = React.useState(0);

  const handleClick = event => {
    console.log("event", event);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1> Counter : {counter}</h1>
      <Button handleClick={handleClick} />
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       counter: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ counter: this.state.counter + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h1> Counter : {this.state.counter}</h1>
//         <Button handleClick={this.handleClick} />
//       </div>
//     );
//   }
// }

export default App;
