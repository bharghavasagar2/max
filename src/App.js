import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Person } from "./Person/Person";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person name="bharghav" age="28" />
        <Person name="sagr" age="33">
          hobbies:racing
        </Person>
        <Person name="prasad" age="22">
          hobbies:surfing
        </Person>
      </div>
    );
  }
}

export default App;
