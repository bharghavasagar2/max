import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Person } from "./Person/Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <Person name="bharghav" age="28" />
        <Person name="sagr" age="33" hobbies="racing" />
      </div>
    );
  }
}

export default App;
