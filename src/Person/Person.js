import React from "react";

export const Person = props => {
  return (
    <div>
      <h1>
        i am a person {props.name} and i am {props.age} old{" "}
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
};
