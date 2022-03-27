import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import React from "react";

//hooks

const App = () => {
  return (
    <div>
      hello world<h1>Use State</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
    </div>
  );
};

export default App;
